import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack'; // Import AuthStackParamList
import { loginSuccess } from '../../store/reducers/authReducer'; // <-- Burayı ekle
// navigation prop artık gerekmez çünkü yönlendirme redux üzerinden olacak
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch(); // <-- Redux dispatch

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.39:8000/api/token/', {
        username,
        password,
      });

      await AsyncStorage.setItem('access_token', response.data.access);

      //  Redux store'a token yaz → RootNavigator otomatik yönlendirecek
      dispatch(loginSuccess({
        user: response.data.user || { username }, // user bilgisi API'den gelmiyorsa yedek olarak gönder
        token: response.data.access,
      }));

    } catch (err: any) {
      console.log('Hata:', err.message);
      setError('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.header}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button title="Login" onPress={handleLogin} color="#4CAF50" />
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')} // Register ekranına git
        >
          <Text style={styles.registerText}>
            Hesabınız yok mu? Buradan Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgb(10, 17, 70)', // Arka plan rengi
  },
  loginBox: {
    backgroundColor: 'rgba(40, 74, 107, 0.3)', // Form arka planı
    width: '90%',
    maxWidth: 400, // Maksimum genişlik
    padding: 30,
    borderRadius: 19, // Yuvarlatılmış köşeler
    boxShadow: '1em 2em 2.5em rgba(237, 237, 244, 0.153)', // Hafif gölge
    borderBottomWidth: 5,
    borderBottomColor: 'green', // Yeşil border
    borderTopWidth: 2,
    borderTopColor: 'green', // Üst border yeşil
  },
  header: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Times New Roman',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: '#333',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#007AFF',
    fontSize: 14,
  },
});
export default LoginScreen;
