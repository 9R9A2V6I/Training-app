import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Button, Switch } from "react-native";
import NextBtn from '../../../Constant/NextBtn';

function BMICalc({ navigation }: { navigation: any }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isKg, setIsKg] = useState(true);
  const [isCm, setIsCm] = useState(true);
  const [bmi, setBmi] = useState(null);

  const [isEnabled, setEnabled] = useState(false);

  const toggleWeightUnit = () => setIsKg(!isKg);
  const toggleHeightUnit = () => setIsCm(!isCm);

  const calculateBMI = ({ navigation }: { navigation: any }) => {
    let weightInKg = isKg ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    let heightInM = isCm ? parseFloat(height) / 100 : parseFloat(height) * 0.3048;
    let bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>

        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>What's your BMI?</Text>
        <Text style={styles.topText}>Body Mass Index</Text>
      </View>

      <View style={styles.bmiCon}>
        <View style={styles.inputContainer}>
          <View style={styles.labelBmi}>
            <Text style={styles.label}>Your Weight</Text>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Kg</Text>
              <Switch value={isKg} onValueChange={toggleWeightUnit} />
              <Text style={styles.toggleText}>Lbs</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder={isKg ? "kg" : "lbs"}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
            />
            <Text style={{ fontSize: 23, color: "#fff", fontWeight: "bold" }}>{isKg ? "kg" : "lbs"}</Text>
          </View>

        </View>

        <View style={styles.inputContainer}>
          <View style={styles.labelBmi}>
            <Text style={styles.label}>Your Height</Text>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Cm</Text>
              <Switch value={isCm} onValueChange={toggleHeightUnit} />
              <Text style={styles.toggleText}>Ft</Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder={isCm ? "cm" : "ft"}
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
            />
            <Text style={{ fontSize: 23, color: "#fff", fontWeight: "bold" }}>{isCm ? "cm" : "ft"}</Text>
          </View>
        </View>

        <Pressable onPress={calculateBMI} style={styles.calculateButton}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Calculate BMI</Text>
        </Pressable>

        {bmi && (
          <Text style={styles.resultText}>Your BMI is: {bmi}</Text>
        )}
      </View>

      <View style={styles.bottomContainer}>
       <NextBtn navigation={navigation} navTo="body_page"/>
      </View>
    </View>
  );
}

export default BMICalc;

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
    gap: 20,
    height: "40%",
    width: "100%",
    marginTop: 0
  },
  rangeSlider: {
    width: "50%",
    height: 5,
    backgroundColor: '#686D76',
    borderRadius: 3,
    overflow: 'hidden',
  },
  rangeSliderInner: {
    width: "30%",
    height: "100%",
    backgroundColor: 'red',
    borderRadius: 3,
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
  bmiCon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 20,

  },
  inputContainer: {
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%'

  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10


  },
  labelBmi: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'

  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '800'
  },
  input: {
    width: 60,
    height: 50,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderWidth: 0,
    // paddingVertical: 15,erf
    fontSize: 25,
    fontWeight: '800',
    color: '#939185',
    borderBottomColor: 'red',
    paddingHorizontal: 10,
    marginBottom: 10,

  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 10,
  },
  calculateButton: {
    backgroundColor: "#387ADF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  resultText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    height: '10%'
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
