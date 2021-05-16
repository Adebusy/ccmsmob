import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginNavigator from "./LoginNavigator";
import SignUpNavigator from "./SignUpNavigator";
import AppNavigator from "../navigation/AppNavigator";
import FirstScreen from "../screens/FirstScreen";
import ThirdScreen from "../screens/ThirdScreen";
import SecondScreen from "../screens/SecondScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="First"
      component={FirstScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="Second"
      component={SecondScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Third"
      component={ThirdScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignUpNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AppNavigator"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
