// components/HorizontalFlatList.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Import images statically
const images = {
  image1: require('../../assets/images/download__2_-removebg-preview.png'),
  image2: require('../../assets/images/download__3_-removebg-preview.png'),
  image3: require('../../assets/images/download__4_-removebg-preview.png'),
  image4: require('../../assets/images/download__5_-removebg-preview.png'),
  image5: require('../../assets/images//download__6_-removebg-preview.png'),
  image6: require('../../assets/images/download__7_-removebg-preview.png'),
};

const data = [
  { id: '1', title: 'Narrow & Thin', image: images.image1 },
  { id: '2', title: 'Narrow & Muscular', image: images.image2 },
  { id: '3', title: 'Narrow & Fat', image: images.image3 },
  { id: '4', title: 'Meduim & Thin', image: images.image4 },
  { id: '5', title: 'Meduim & Muscular', image: images.image5 },
  { id: '6', title: 'Meduim & Fat', image: images.image6 },
  // Add more items as needed
];

const ItemFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckboxChange = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, item.id === selectedId && styles.cardSelected]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Image
        source={item.image}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <TouchableOpacity 
        style={styles.checkboxContainer} 
        onPress={() => handleCheckboxChange(item.id)}
      >
        <View style={[styles.checkbox, item.id === selectedId && styles.checkboxChecked]} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 17,
    fontWeight: '900',
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 220,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    gap: 20,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: 'blue',
  },
  cardImage: {
    width: '100%',
    height: '80%',
  },
  checkboxContainer: {
    position: 'absolute',
    bottom: 7,
    left: 190,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 3,
  },
  checkboxChecked: {
    // backgroundColor: 'blue',
    borderColor: 'blue',
  },
});

export default ItemFlatList;
