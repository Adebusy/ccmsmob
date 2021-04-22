import React from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppFormField, ErrorMessage, SubmitButton, AppForm } from "../components/forms";
import users from "../api/users";
import AuthStorage from "../auth/storage";
import { useState } from "react";

import AppNavigator from "../navigation/AppNavigator";
import NewComplainNavigator from "../navigation/NewComplainNavigator";
import NavigationTheme from "../navigation/navigationTheme";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AccountNavigator from "../navigation/AccountNavigator";
import { useContext } from "react/cjs/react.production.min";
import AuthContext from "../auth/context";

const validateRequestBody = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(10).label("Password"),
});

function LoginScreen() {
 const authContext = useContext(AuthContext);
  const navigation = useNavigation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const [loginFailed, setLoginFailed] = useState(falss);

  const handleSubmit = async (loginDetail, { resetForm }) => {
    navigation.navigate("AppNavigator");

    ////
  const result  = await users.login({email, password})
  if(!result.ok) return setLoginFailed(true);
  setLoginFailed(false);
  authContext.setUser(result.data);
  AuthStorage.storeToken(result.data);
    ////

    //var response = await users.loginUsers(loginDetail);
    //setProgress(0);
    //setUploadVisible(true);

    // if (!response.ok) {
    //   setUploadVisible(false);
    //   navigation.navigate(NewComplainNavigator);
    //   // return alert(
    //   //   "Unable to login at the moment. Please try again later!!" +
    //   //     console.log("wahala wa ooo 0 " + response.msg)
    //   // );
    // } else {
    //   navigation.navigate(NewComplainNavigator);
    // }
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/complaint.png")}
      ></Image>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validateRequestBody}
      >
       <ErrorMessage error ="invalid username and/or password" visible ={loginFailed}/>
        <AppFormField
          name="email"
          style={styles.textInput}
          icon={"email"}
          placeholder={"Email address"}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalized="none"
          textContentType="emailAddress"
        ></AppFormField>
        <AppFormField
          ontext
          name="password"
          autoCapitalized="none"
          style={styles.textInput}
          icon={"lock"}
          placeholder={"password"}
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
        ></AppFormField>
        <SubmitButton name="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 400,
    width: 400,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
