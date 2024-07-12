import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";

import BackgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../.../../../../../assets/svg/Fitness-Logos.svg";
import TextLogo from "../../../baseui/TextLogo/TextLogo";

const LoadingPage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../../../assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../../../../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("welcome_page");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.root}>
      <View style={styles.bgStyleView}>
        <BackgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <Image
          style={styles.tinyLogo}
          source={require('../../../../assets/images/Fitness-Logos-removebg-preview.png')}
        />
        <Text style={styles.titleStyle1}>
          Fit<Text style={styles.titleStyle2}>Fusion</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  root: {
    position: "relative",
    width: "100%",
    height: '100%',
  },
  bgStyleView: {
    width: "100%",
    height: "100%"
  },
  contentViewStyle: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#000"
  },
  titleStyle1: {
    color: "#E76F51",
    fontSize: 40,
    fontWeight: "500",
    marginTop: 12,
    // fontFamily: "Roboto",
  },
  titleStyle2: {
    color: "#fff",
  },
  textLogoViewStyle: {
    position: "absolute",
    bottom: 100,
    left: "38%",
  },
  tinyLogo: {
    width: '60%',
    height: "20%"
  }
});
