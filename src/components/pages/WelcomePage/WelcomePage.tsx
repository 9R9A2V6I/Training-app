import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import NextBtn from "../../../Constant/NextBtn";

const WelcomePage = ({ navigation }: { navigation: any }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>

        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>What's your gender?</Text>

        <View style={styles.genderBox}>
          <Pressable
            style={[
              styles.genderInnerBox,
              selectedGender === 'male' && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect('male')}
          >
            <Image
              style={styles.genderImage}
              source={require('../../../../assets/images/369763708-removebg-preview.png')}
            />
            {selectedGender === 'male' && (
              <Text style={styles.tick}>✔</Text>
            )}
            <Text style={styles.genderText}>Male</Text>
          </Pressable>
          <Pressable
            style={[
              styles.genderInnerBox,
              selectedGender === 'female' && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect('female')}
          >
            <Image
              style={styles.genderImage}
              source={require('../../../../assets/images/images__1_-removebg-preview.png')}
            />
            {selectedGender === 'female' && (
              <Text style={styles.tick}>✔</Text>
            )}
            <Text style={styles.genderText}>Female</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <NextBtn navigation={navigation} navTo="age_page" />
        <Text style={{ color: "#B4B4B8", fontSize: 16, fontWeight: "600" }}>
        
          Already have an account? <Pressable  onPress={() => navigation.navigate("login_page")}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "900" }}>Log In</Text>
    </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    height: "100%",
    paddingTop: "5%",
    paddingBottom: 100,
    backgroundColor: "#000",
    gap: 35,
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: "85%",
    width: "100%",
  },
  rangeSlider: {
    width: "80%",
    height: 5,
    backgroundColor: '#686D76',
    borderRadius: 3,
    overflow: 'hidden',
  },
  rangeSliderInner: {
    width: "10%",
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
    fontSize: 29,
    fontWeight: '800',
  },
  genderBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: 'row',
  },
  genderInnerBox: {
    display: 'flex',
    alignItems: "center",
    gap: 20,
    padding: 10,
    borderRadius: 10,
  },
  genderImage: {
    height: 200,
    width: 140,
  },
  genderText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  selectedGender: {
    backgroundColor: "#fff",
  },
  tick: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 24,
    color: "#000",
    fontWeight: "800",
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: '22%',
    backgroundColor: "#387ADF",
    borderRadius: 20,
    color: "#fff",
  },
});
