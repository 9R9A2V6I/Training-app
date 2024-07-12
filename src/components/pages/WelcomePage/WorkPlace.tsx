import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NextBtn from '../../../Constant/NextBtn';

function WorkPlace({ navigation }) {
  const [opacity, setOpacity] = useState({ gym: 0.4, home: 0.4 });

  const handlePress = (place) => {
    setOpacity((prevState) => ({
      ...prevState,
      [place]: prevState[place] === 0.4 ? 1 : 0.4,
    }));
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>
        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>Where your Workout place?</Text>
      </View>
      <View style={styles.workPlaceContainer}>
        <TouchableOpacity style={styles.workInner} onPress={() => handlePress('gym')}>
          <Image
            style={[styles.workPlace, { opacity: opacity.gym }]}
            source={require('../../../../assets/images/pexels-anastasia-shuraeva-4944976.jpg')}
          />
          <Text style={styles.workInnerText}>Gym Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.workInner} onPress={() => handlePress('home')}>
          <Image
            style={[styles.workPlace, { opacity: opacity.home }]}
            source={require('../../../../assets/images/pexels-valeria-ushakova-603898-3094230.jpg')}
          />
          <Text style={styles.workInnerText}>Home Workout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <NextBtn navigation={navigation} navTo="farea_page" />
      </View>
    </View>
  );
}

export default WorkPlace;

const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: '20%',
    width: '100%',
    marginTop: 20,
  },
  rangeSlider: {
    width: '70%',
    height: 5,
    backgroundColor: '#686D76',
    borderRadius: 3,
    overflow: 'hidden',
  },
  rangeSliderInner: {
    width: '80%',
    height: '100%',
    backgroundColor: '#DC5F00',
    borderRadius: 2,
  },
  topText: {
    color: '#EEEEEE',
    fontSize: 15,
  },
  topText2: {
    color: '#fff',
    fontSize: 33,
    fontWeight: '800',
    width: '80%',
    textAlign: 'center',
  },
  workPlaceContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    gap: 10,
  },
  workInner: {
    width: '90%',
    height: '42%',
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workPlace: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    objectFit:"contain"
  },
  workInnerText: {
    position: 'absolute',
    alignItems: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '900',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    height: '7%',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: '#387ADF',
    borderRadius: 20,
    color: '#fff',
  },
});
