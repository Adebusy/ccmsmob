import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React  from "react";
import NewComplainScreen from "../screens/NewComplainScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "../navigation/AccountNavigator";
import NewComplainNavigator from "../navigation/NewComplainNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();
const MyColor = "red";

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: (MyColor, size) => (
          <MaterialCommunityIcons name="home" color={MyColor} size={size} />
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
        tabBarIcon: (MyColor, size) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={MyColor}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator} initialParams={{mail:"test@gmail.com", title:"alao Ramon"}}
      options={{
        tabBarIcon: (MyColor, size) => (
          <MaterialCommunityIcons name="account" color={MyColor} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
