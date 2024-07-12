import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./AuthContext"; // Adjust the path as necessary
import PrivateRoute from "./PrivateRoute"; // Adjust the path as necessary

import LoadingPage from "./src/components/pages/LoadingPage/LoadingPage";
import WelcomePage from "./src/components/pages/WelcomePage/WelcomePage";
import RegistrationForm from "./src/components/pages/LoginPage/RegistrationForm";
import CountryPage from "./src/components/pages/LoginPage/CountryPage";
import OtpPage from "./src/components/pages/LoginPage/OtpPage";
import HomePage from "./src/components/pages/HomePage/HomePage";
import Example from "./src/components/pages/HomePage/Example";
import AgeSelect from "./src/components/pages/WelcomePage/AgeSelect";
import BMICalc from "./src/components/pages/WelcomePage/BMICalc";
import BodyTypeSelect from "./src/components/pages/WelcomePage/BodyTypeSelect";
import FintnessGoal from "./src/components/pages/WelcomePage/FintnessGoal";
import FArea from "./src/components/pages/WelcomePage/FArea";
import WorkPlace from "./src/components/pages/WelcomePage/WorkPlace";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="loading_page">
          <Stack.Screen
            name="loading_page"
            component={LoadingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="welcome_page"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login_page"
            component={RegistrationForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="country_page"
            component={CountryPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="otp_page"
            component={OtpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home_page"
            component={PrivateRoute(Example)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="age_page"
            component={PrivateRoute(AgeSelect)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="bmi_page"
            component={PrivateRoute(BMICalc)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="body_page"
            component={PrivateRoute(BodyTypeSelect)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="fit_page"
            component={PrivateRoute(FintnessGoal)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="farea_page"
            component={PrivateRoute(FArea)}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="place_page"
            component={PrivateRoute(WorkPlace)}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
