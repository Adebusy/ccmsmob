import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/Homescreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default LoginNavigator;
