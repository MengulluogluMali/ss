import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';

// Import product data
const products = [
  {
    id: 1,
    refa: "REF: 102.002.0020",
    name: "Bowie Dick Test Pack - Economic",
    description: "Used for daily monitoring of pre-vacuum steam sterilizer. Based upon the Bowie Dick test result the steam sterilizer is released for usage during the day",
    image: "one.png",
    category: "s-monitoring",
    characteristics: [
      "Fulfill requirements of EN 285 and ISO 17665",
      "Conform to ISO 11140 - 4 Type 2 / EN 867 - 4 class B (EU standard 7 kilo)",
      "Easy to interpret, Easy to document",
      "Independently tested to show performance similar to original pack",
      "Clear blue - violet color change Non-Toxic / Lead Free",
      "Dimensions: 123 x 123 x 16 mm",
    ],
  },
  {
    id: 2,
    refa: "REF: 102.100.0100",
    name: "Bowie Dick Test Pack - Mini",
    description: "Recommended for daily monitoring of pre-vacuum steam sterilizer and bench-top steam sterilizers(Class B). Based upon the Bowie Dick test result the steam sterilizer is released for usage duringthe day.",
    image: "two.png",
    category: "s-monitoring",
    characteristics: [
      "Fulfill requirements of EN 285 and ISO 17665",
      "Conform to ISO 11140 - 4 Type 2 / Performance similar to original Bowie Dick Test Pack",
      "Easy to interpret, Easy to document",
      "Independently tested to show performance similar to original pack",
      "Clear blue - violet color change Non-Toxic / Lead Free",
      "Dimensions: 105 x 65 x 6 mm",
    ],
  },
  // Add more products as needed
];

const ProductsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = products;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image 
        source={require(`../../assets/images/${item.image}`)} 
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productRef}>{item.refa}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <TouchableOpacity style={styles.seeProductButton}>
          <Text style={styles.seeProductText}>See Product</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filterContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterButtons}
        >
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'all' && styles.selectedButton]}
            onPress={() => setSelectedCategory('all')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'all' && styles.selectedButtonText]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 's-monitoring' && styles.selectedButton]}
            onPress={() => setSelectedCategory('s-monitoring')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 's-monitoring' && styles.selectedButtonText]}>
              Sterilizer Monitoring
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'i-p-monitoring' && styles.selectedButton]}
            onPress={() => setSelectedCategory('i-p-monitoring')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'i-p-monitoring' && styles.selectedButtonText]}>
              In-Pack Monitoring
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'sbs' && styles.selectedButton]}
            onPress={() => setSelectedCategory('sbs')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'sbs' && styles.selectedButtonText]}>
              Sterile Barrier Systems
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'trace' && styles.selectedButton]}
            onPress={() => setSelectedCategory('trace')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'trace' && styles.selectedButtonText]}>
              Traceability/Documentation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'cleaning' && styles.selectedButton]}
            onPress={() => setSelectedCategory('cleaning')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'cleaning' && styles.selectedButtonText]}>
              Cleaning/Disinfection
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.filterButton, selectedCategory === 'accs' && styles.selectedButton]}
            onPress={() => setSelectedCategory('accs')}
          >
            <Text style={[styles.filterButtonText, selectedCategory === 'accs' && styles.selectedButtonText]}>
              Accessories
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search product name here.."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productsGrid}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterContainer: {
    padding: 10,
  },
  filterButtons: {
    paddingHorizontal: 10,
    gap: 10,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    color: '#333',
    fontSize: 14,
  },
  selectedButtonText: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productsGrid: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
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
  productRef: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productName: {
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

export default ProductsScreen; 