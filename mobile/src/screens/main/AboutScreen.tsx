import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hr} />
        <Text style={styles.title}>About Sp Medikal</Text>
        <View style={styles.hr} />
      </View>

      <View style={styles.section}>
        <Image 
          source={require('../../assets/images/aboutus.png')} 
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            SP Medikal San Ltd Sti, based in Istanbul - Turkey, with a European management, is dedicated to the development, production and distribution of Sterility Assurance Products in accordance with the latest international standards.
          </Text>
          <Text style={styles.text}>
            SP Medikal combines over 30 years of experience, expertise and know-how by its founding partners with markets in Africa, Asia, Europe, Middle East, and South-America.
          </Text>
          <Text style={styles.text}>
            Due to this broad experience, SP Medikal is offering a complete product range of CSSD Products and services which meets the requirements and needs of today's Central Sterile Supply Departments in Healthcare facilities.
          </Text>
          <Text style={styles.text}>
            Over more then 70 countries are served by SP Medikal through exclusive distributors and over 25 countries through her second production facility in South-America.
          </Text>
          <Text style={styles.text}>
            The Sterility Assurance Products SP Medikal provides can be categorized into 4 groups i.e.
          </Text>
          <Text style={styles.listItem}>- Sterilizer Monitoring</Text>
          <Text style={styles.listItem}>- Documentation / Traceability</Text>
          <Text style={styles.listItem}>- Sterile Barrier Systems</Text>
          <Text style={styles.listItem}>- Cleaning / Disinfection</Text>
          <Text style={styles.listItem}>- Accessories</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            All Sterintech™ branded products are produced and/or assembled in our up-to-date production facility. The development, production and packaging of our products are meeting our quality assurance procedures as laid down in our ISO 13485 quality manual accredited by KIWA.
          </Text>
          <Text style={styles.text}>
            SP Medikal is a GMDN registered manufacturer and has a Medical Device Manufacturer's certificate and registration by the Turkish Government.
          </Text>
          <Text style={styles.text}>
            Medical Devices amongst our product range are CE-marked and certified (sterile barrier systems) and fulfill requirements of Medical Device Directive 93/42 EEC.
          </Text>
          <Text style={styles.text}>
            Our products comply with the requirements as laid down in the latest versions of the following standards:
          </Text>
          <Text style={styles.listItem}>- EN 285</Text>
          <Text style={styles.listItem}>- EN 865 / 866 / 867 / 868</Text>
          <Text style={styles.listItem}>- ISO 13060</Text>
          <Text style={styles.listItem}>- ISO 11138</Text>
          <Text style={styles.listItem}>- ISO 11140</Text>
          <Text style={styles.listItem}>- ISO 11607</Text>
          <Text style={styles.text}>
            All our products are carrying our brandname Sterintech™ but are also available as OEM product.
          </Text>
        </View>
        <Image 
          source={require('../../assets/images/quality.png')} 
          style={styles.image}
          resizeMode="contain"
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
  section: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: '40%',
    height: 200,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    marginLeft: 10,
  },
});

export default AboutScreen; 