import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingComplainScreen from "../screens/ListingComplainScreen";
import ListingComplainDetailScreen from "../screens/ListingComplainDetailScreen";
import NewComplainNavigator from "../navigation/NewComplainNavigator";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingComplainScreen} />
    <Stack.Screen
      name="ListingComplainDetailScreen"
      component={ListingComplainDetailScreen}
    />
    <Stack.Screen
      name="NewComplainNavigator"
      component={NewComplainNavigator}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
