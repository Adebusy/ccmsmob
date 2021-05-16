import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/Homescreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginNavigator from "./LoginNavigator";

const Stack = createStackNavigator();

const SignUpNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Signup"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default SignUpNavigator;
