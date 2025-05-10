import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { logout } from '../../store/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.clear();
            dispatch(logout());
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderSettingItem = (
    icon: string,
    title: string,
    value?: boolean,
    onValueChange?: (value: boolean) => void,
    onPress?: () => void
  ) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.settingItemLeft}>
        <Ionicons name={icon as any} size={24} color="#333" />
        <Text style={styles.settingItemText}>{title}</Text>
      </View>
      {typeof value !== 'undefined' && (
        <Switch value={value} onValueChange={onValueChange} />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        {renderSettingItem(
          'notifications-outline',
          'Push Notifications',
          pushNotifications,
          setPushNotifications
        )}
        {renderSettingItem(
          'mail-outline',
          'Email Notifications',
          emailNotifications,
          setEmailNotifications
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        {renderSettingItem(
          'moon-outline',
          'Dark Mode',
          darkMode,
          setDarkMode
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {renderSettingItem(
          'shield-outline',
          'Privacy Policy',
          undefined,
          undefined,
          () => {/* Navigate to Privacy Policy */}
        )}
        {renderSettingItem(
          'document-text-outline',
          'Terms of Service',
          undefined,
          undefined,
          () => {/* Navigate to Terms of Service */}
        )}
        {renderSettingItem(
          'help-circle-outline',
          'Help & Support',
          undefined,
          undefined,
          () => {/* Navigate to Help & Support */}
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
