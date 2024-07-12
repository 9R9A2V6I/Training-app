import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Button, FlatList } from "react-native";
import ItemFlatList from '../../../Constant/ItemFlatList';
import NextBtn from '../../../Constant/NextBtn';

function BodyTypeSelect({ navigation }: { navigation: any }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>

        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>What's your current body type?</Text>
      </View>

      <View style={styles.listItems}>
        <ItemFlatList />
      </View>

      <View style={styles.bottomContainer}>
      <NextBtn navigation={navigation} navTo="fit_page" />
      </View>




    </View>
  )
}

export default BodyTypeSelect;


const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: "#000"
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: "30%",
    width: "100%",
    marginTop: 20
  },
  rangeSlider: {
    width: "70%",
    height: 5,
    backgroundColor: '#686D76',
    borderRadius: 3,
    overflow: 'hidden',
  },
  rangeSliderInner: {
    width: "50%",
    height: "100%",
    backgroundColor: '#DC5F00',
    borderRadius: 2,
  },
  topText: {
    color: "#EEEEEE",
    fontSize: 15,
  },
  topText2: {
    color: "#fff",
    fontSize: 33,
    fontWeight: '800',
    width: "80%",
    textAlign: 'center'
  },
  input: {
    height: 48,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 12,
    color: "#fff",
  },
  listItems: {
    height: "48%"
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    height: '12%'
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: "#387ADF",
    borderRadius: 20,
    color: "#fff",
  },
});
