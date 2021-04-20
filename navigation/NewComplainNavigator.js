import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import NewComplainScreen from "../screens/NewComplainScreen";
import AccountScreen from "../screens/AccountScreen";
import ListingComplainScreen from "../screens/ListingComplainScreen";
import ListingComplainDetailScreen from "../screens/ListingComplainDetailScreen";

const Stack = createStackNavigator();

const NewComplainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NewComplainScreen"
      component={NewComplainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen
      name="ListingComplainScreen"
      component={ListingComplainScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingComplainDetailScreen"
      component={ListingComplainDetailScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default NewComplainNavigator;
