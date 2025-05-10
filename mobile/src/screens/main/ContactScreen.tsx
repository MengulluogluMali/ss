import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const ContactScreen = () => {
  const handleGetDirections = () => {
    Linking.openURL('https://maps.app.goo.gl/jSJj3oo3NRvn6ant8');
  };

  const handleSendEmail = () => {
    Linking.openURL('mailto:marketing@spmedikal.com');
  };

  const handleVisitFacebook = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100057052676669');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hr} />
        <Text style={styles.title}>Contact with us</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image 
            source={require('../../assets/images/sphq.jpg')} 
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Headquarters</Text>
            <Text style={styles.cardText}>
              Adress: Cubuklu Caddesi 39 - Deliklikaya - Arnavutkoy - İstanbul - TURKEY
            </Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={handleGetDirections}
            >
              <Text style={styles.buttonText}>Get directions</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image 
            source={require('../../assets/images/mail.jpg')} 
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>E-mail</Text>
            <Text style={styles.cardText}>marketing@spmedikal.com</Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={handleSendEmail}
            >
              <Text style={styles.buttonText}>Send an e-mail</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image 
            source={require('../../assets/images/facebook-now-meta.jpg')} 
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Social Media</Text>
            <Text style={styles.cardText}>SP Medikal On Meta</Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={handleVisitFacebook}
            >
              <Text style={styles.buttonText}>Visit Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6018.5183533767695!2d28.9213544!3d41.041461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa1d01040d4ecec6!2sSP+Medikal+San+Ltd+Sti!5e0!3m2!1str!2str!4v1524147073263' }}
          style={styles.map}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  hr: {
    height: 2,
    backgroundColor: '#007AFF',
    width: '100%',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardsContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mapContainer: {
    padding: 20,
    height: 550,
  },
  map: {
    width: width - 40,
    height: 550,
  },
});

export default ContactScreen; 