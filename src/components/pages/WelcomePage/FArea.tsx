import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import NextBtn from '../../../Constant/NextBtn';

function FArea({ navigation }: { navigation: any }) {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (part: string | null) => {
    setSelectedPart(part);
  };

  const getImageSource = (part: string | null) => {
    switch (part) {
      case 'Chest':
        return require('../../../../assets/BodyParts/Chest.png');
      case 'Shoulders':
        return require('../../../../assets/BodyParts/Shoulder.png');
      case 'Back':
        return require('../../../../assets/BodyParts/Back.png');
      case 'Arms':
        return require('../../../../assets/BodyParts/Arms.png');
      case 'Abdomen':
        return require('../../../../assets/BodyParts/Abs.png');
      case 'Glutes':
        return require('../../../../assets/BodyParts/Glute.png');
      case 'Thighs':
        return require('../../../../assets/BodyParts/Legs.png');
      case 'Calves':
        return require('../../../../assets/BodyParts/Claves.png');
      case 'All':
        return require('../../../../assets/BodyParts/FullBody.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>
        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>What's your focus area?</Text>
      </View>

      <View style={styles.listItems}>
        <TouchableOpacity
          onPress={() => handlePartClick('All')}
          style={[styles.button, selectedPart === 'All' && styles.selectedButton]}
        >
          <Text style={{ color: "#fff" }}>Focus on all body parts equally</Text>
        </TouchableOpacity>

        <View style={styles.buttonGrid}>
          {['Chest', 'Shoulders', 'Back', 'Arms', 'Abdomen', 'Glutes', 'Thighs', 'Calves'].map((part) => (
            <TouchableOpacity
              key={part}
              onPress={() => handlePartClick(part)}
              style={[styles.button, selectedPart === part && styles.selectedButton]}
            >
              <Text style={{ color: "#fff" }}>{part}</Text>
            </TouchableOpacity>
          ))}
        </View>


        {selectedPart && (

          <Image
            source={getImageSource(selectedPart)}
            style={styles.selectedPartImage}
            resizeMode="contain"
          />

        )}
      </View>

      <View style={styles.bottomContainer}>
        <NextBtn navigation={navigation} navTo="place_page" />
      </View>
    </View>
  );
}

export default FArea;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: "18%",
    width: "100%",
    marginTop: 20,
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
    textAlign: 'center',
  },
  listItems: {
    height: "65%",
    width: "100%",
    alignItems: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 5,
  },
  button: {
    margin: 8,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DC5F00",
  },
  selectedButton: {
    backgroundColor: '#DC5F00',
  },
  selectedPartsText: {
    color: "#EEEEEE",
    fontSize: 15,
    marginTop: 10,
  },


  selectedPartImage: {
    width: 300,
    height: 360,

  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '5%',
  },
});
