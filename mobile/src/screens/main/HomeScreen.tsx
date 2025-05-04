import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // Mock data for best seller products - replace with actual data from your API
  const bestSellers = [
    {
      id: 62,
      image: require('../../assets/images/sixtytwo.png'),
      title: 'UltraSon - Efficiency Test',
      description: 'Is your ultrasonic energy level OK?',
    },
    {
      id: 24,
      image: require('../../assets/images/twentythree.png'),
      title: 'SCBI for STEAM with 8 hour PH reaction',
      description: 'Quickly monitoring - 8 Hours',
    },
    {
      id: 35,
      image: require('../../assets/images/thirtyfive.png'),
      title: 'Sterilization Rolls',
      description: '60 gsm - green film',
    },
  ];

  const renderProductCard = (item) => (
    <TouchableOpacity key={item.id} style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.seeProductButton}>
          <Text style={styles.seeProductText}>See Product</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            // Implement refresh logic here
          }}
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome, {user?.first_name || user?.username}!
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.aboutContainer}>
        <View style={styles.aboutCard}>
          <Image 
            source={require('../../assets/images/sterintech.png')} 
            style={styles.aboutImage}
          />
          <View style={styles.aboutContent}>
            <Text style={styles.aboutTitle}>About Sterintech</Text>
            <Text style={styles.aboutText}>
              SterinTech is an innovative company in medical technology, specializing in the production of hospital equipment, sterilization devices, and medical instruments. Committed to high quality and reliability, SterinTech enhances efficiency and patient safety in healthcare services.
            </Text>
            <Text style={styles.standardsTitle}>Our Standards:</Text>
            <Text style={styles.standardItem}>- EN 285</Text>
            <Text style={styles.standardItem}>- EN 865 / 866 / 867 / 868</Text>
            <Text style={styles.standardItem}>- ISO 13060</Text>
            <Text style={styles.standardItem}>- ISO 11138</Text>
            <Text style={styles.standardItem}>- ISO 11140</Text>
            <Text style={styles.standardItem}>- ISO 11607</Text>
          </View>
        </View>
      </View>

      {/* Best Sellers Section */}
      <View style={styles.bestSellersContainer}>
        <Text style={styles.sectionTitle}>Best Seller Products</Text>
        <View style={styles.productsGrid}>
          {bestSellers.map(renderProductCard)}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  aboutContainer: {
    marginBottom: 30,
  },
  aboutCard: {
    backgroundColor: 'rgba(18, 11, 3, 0.1)',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  aboutImage: {
    width: '40%',
    height: 200,
    resizeMode: 'contain',
  },
  aboutContent: {
    flex: 1,
    padding: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  aboutText: {
    color: '#fff',
    marginBottom: 15,
  },
  standardsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  standardItem: {
    color: '#fff',
    marginBottom: 5,
  },
  bestSellersContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    color: '#666',
    marginBottom: 10,
    fontSize: 14,
  },
  seeProductButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  seeProductText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen; 