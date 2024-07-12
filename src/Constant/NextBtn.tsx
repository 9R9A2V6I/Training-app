import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const NextBtn = ({ navigation, navTo }) => {
  return (
    <Pressable style={styles.buttonBox} onPress={() => navigation.navigate(navTo)}>
      <Text style={styles.buttonText}>Next</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: "#387ADF",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NextBtn;
