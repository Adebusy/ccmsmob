import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";
import AccountNavigator from "./navigation/AccountNavigator";
import NavigationTheme from "./navigation/navigationTheme";
import OfflineNotice from "./components/OfflineNotice";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";
import AppLoading from "expo-app-loading";

function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false); //creating a boolean to hold availability of the app
  
  const restoreUser  = async() =>{
    const userObj = await authStorage.getUser();
    if (userObj) setUser(userObj);
    console.log("userObj");
    console.log(userObj);
 };

//on loading the splash screen we set startAsyn to the function to be called when the app starts
//this get called when the startAsyn finishs loading so we set it to true
//so in the next render, isReady will be true so instead of the splash screen we are going to set the render of our app.
//if(!isReady) return <AppLoading startAsyn={restoreToken} onFinish ={() => setIsReady(true)} />

//if(!isReady) return <AppLoading startAsync={restoreUser} onFinish ={() => setIsReady(true)} onError={(error)=> console.warn(error)} />
  return (
    <AuthContext.Provider value={{user, setUser}}>
    <OfflineNotice/>
    <NavigationContainer theme={NavigationTheme}>
      {user ? <AppNavigator/> :<AuthNavigator />}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App;
