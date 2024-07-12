import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from "../../../../AuthContext"; // Adjust the path as necessary

const RegistrationForm = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 1 && email) setStep(2);
    if (step === 2 && password) setStep(3);
    if (step === 3 && repeatPassword && password === repeatPassword) {
      register(email, password);
      setStep(4);
    }
  };

  return (
    <View style={styles.back}>
      <View style={styles.registrationForm}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign Up</Text>
          <Text style={styles.headerSubtitle}>Fill in all informations</Text>
        </View>
        {step === 1 && (
          <View style={styles.inputSection}>
            <TextInput
              style={styles.input}
              placeholder="ENTER YOUR E-MAIL HERE"
              autoComplete="off"
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={[styles.animatedButton, email && styles.next]}
              onPress={handleNextStep}
            >
              <Icon name="envelope-o" size={25} color="rgb(153, 153, 248)" />
              <Icon name="arrow-up" size={25} color="rgb(153, 153, 248)" />
            </TouchableOpacity>
          </View>
        )}
        {step === 2 && (
          <View style={styles.inputSection}>
            <TextInput
              style={styles.input}
              placeholder="ENTER YOUR PASSWORD HERE"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={[styles.animatedButton, password && styles.next]}
              onPress={handleNextStep}
            >
              <Icon name="lock" size={25} color="rgb(153, 153, 248)" />
              <Icon name="arrow-up" size={25} color="rgb(153, 153, 248)" />
            </TouchableOpacity>
          </View>
        )}
        {step === 3 && (
          <View style={styles.inputSection}>
            <TextInput
              style={styles.input}
              placeholder="REPEAT YOUR PASSWORD HERE"
              secureTextEntry
              value={repeatPassword}
              onChangeText={setRepeatPassword}
            />
            <TouchableOpacity
              style={[styles.animatedButton, repeatPassword && styles.next]}
              onPress={handleNextStep}
            >
              <Icon name="lock" size={25} color="rgb(153, 153, 248)" />
              <Icon name="paper-plane" size={25} color="rgb(153, 153, 248)" />
            </TouchableOpacity>
          </View>
        )}
        {step === 4 && (
          <View style={styles.success}>
            <Text style={styles.successText}>ACCOUNT CREATED</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationForm: {
    width: 380,
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },
  headerTitle: {
    fontWeight: '900',
    letterSpacing: 1.5,
    color: '#333',
    fontSize: 23,
    textTransform: 'uppercase',
    margin: 0,
  },
  headerSubtitle: {
    color: 'rgb(159, 172, 182)',
    fontSize: 17,
    marginTop: 5,
  },
  inputSection: {
    marginTop: 10,
    backgroundColor: 'rgb(233, 226, 192)',
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: 'rgb(243, 243, 251)',
    color: 'rgb(143, 143, 214)',
    flex: 1,
    borderWidth: 0,
    padding: 10,
  },
  animatedButton: {
    backgroundColor: 'rgb(212, 212, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  next: {
    backgroundColor: 'limegreen',
  },
  icon: {
    fontSize: 25,
    color: 'rgb(153, 153, 248)',
  },
  success: {
    backgroundColor: 'limegreen',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  successText: {
    color: 'white',
    fontWeight: '900',
    letterSpacing: 2,
    fontSize: 18,
  },
});

export default RegistrationForm;
