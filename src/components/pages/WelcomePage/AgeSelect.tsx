import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import NextBtn from '../../../Constant/NextBtn';

function AgeSelect({ navigation }: { navigation: any }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.rangeSlider}>
          <View style={styles.rangeSliderInner}></View>
        </View>

        <Text style={styles.topText}>Designing your personalised fitness plan</Text>
        <Text style={styles.topText2}>What's your age?</Text>

        <View>
          <SafeAreaView>

            
            <Button title="Select a date" onPress={showDatePicker} />
            <DateTimePickerModal
              date={selectedDate ? new Date(selectedDate) : undefined}
              minimumDate={new Date('1990-05-15')}
              maximumDate={new Date('2015-06-15')}
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

          </SafeAreaView>
        </View>
      </View>

      <View style={styles.bottomContainer}>
      <NextBtn navigation={navigation} navTo="bmi_page"/>
      </View>


    </View>
  );
}

export default AgeSelect;

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
    height: "40%",
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
    width: "20%",
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
  input: {
    height: 48,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 12,
    color: "#fff",
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    height: '52%'
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
