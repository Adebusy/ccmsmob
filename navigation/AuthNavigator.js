import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/Homescreen";
import LoginNavigator from "./LoginNavigator";
import SignUpNavigator from "./SignUpNavigator";
import AccountNavigator from "../navigation/AccountNavigator";
import AppNavigator from "../navigation/AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
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
