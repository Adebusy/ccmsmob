import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import NewComplainScreen from "../screens/NewComplainScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "../navigation/AccountNavigator";
import NewComplainNavigator from "../navigation/NewComplainNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
const Tab = createBottomTabNavigator();
const Mycolor = "red";
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: (Mycolor, size) => (
          <MaterialCommunityIcons name="home" color={Mycolor} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="NewComplainScreen"
      component={NewComplainScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(NewComplainNavigator)}
          />
        ),
        tabBarIcon: (Mycolor, size) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={Mycolor}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: (Mycolor, size) => (
          <MaterialCommunityIcons name="account" color={Mycolor} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
