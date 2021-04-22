import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button } from "react-native";
import Homescreen from "./screens/Homescreen";
import Screen from "./components/Screen";
import colors from "./config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";
import NavigationTheme from "./navigation/navigationTheme";
import OfflineNotice from "./components/OfflineNotice";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";
import {AppLoading} from "expo";// to handle the splash screen on app load

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweet" component={Tweet} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={{ title: "Tweet Details" }}
    />
  </Stack.Navigator>
);
const Tweet = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { name: "alao" })}
    />
  );
};

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Screeen Details {route.params.name}</Text>
  </Screen>
);

const Account = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { name: "alao" })}
    />
  );
};

//for bottom tab

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

function App() {
  const[user, setUser]  = useState();
  const {isReady, setIsReady} = useState(false); //creating a boolean to hold availability of the app  

const restoreToken  = async =>{
  const userObj =await authStorage.getToken();
  if (!userObj) return;
  setUser(userObj);
}

//we no longer need the effect hook on app load because 
//this was commented because a page(splash screen) usually loads before loading our application from the simulator
//useEffect(() =>{ restoreToken()}, [])

//on loading the splash screen we set startAsyn to the function to be called when the app starts
//this get called when the startAsyn finishs loading so we set it to true
//so in the next render, isReady will be true so instead of the splash screen we are going to set the render of our app.
if(!isReady) return <AppLoading startAsyn={restoreToken} onFinish ={() => setIsReady(true)} />

  return (
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer theme={NavigationTheme}>
      {user ? <AppNavigator/> :<AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
    // <Screen>
    //   <Homescreen
    //     title={AppConfig.Title}
    //     subTitle={AppConfig.SubTitle}
    //     image={AppConfig.AppImage}
    //   ></Homescreen>
    // </Screen>
  );
}
const styles = StyleSheet.create({
  Appss: {
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
  },
});
export default App;
