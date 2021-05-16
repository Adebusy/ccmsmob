import React, {useState, useContext} from "react";
import Screen from "../components/Screen";
import { StyleSheet , Text, Image, TouchableOpacity,} from "react-native";
import * as Yup from "yup";
import { AppFormField, ErrorMessage, SubmitButton, AppForm } from "../components/forms";
import users from "../api/users";
import AuthStorage from "../auth/storage";
import AppText from "../components/AppText";
import jwt_decode from "jwt-decode";
import AuthContext from "../auth/context";

const validateRequestBody = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

function LoginScreen( {navigation }) {
   const authContext = useContext(AuthContext);
   const [loginFailed, setLoginFailed] = useState(false);  
   const handleSubmit = async ({email, password}) => {
   const result  = await users.login(email, password);
   
   if(!result.ok) return setLoginFailed(true);
   if(result.ok) {
       setLoginFailed(false);
       console.log(result.data);
       const user = jwt_decode(result.data);
       console.log(user)
       await AuthStorage.storeToken(result.data);
       authContext.setUser(user);
   }
   };
   return (
      <Screen style={styles.container}>
        <AppText>{"Customer Complaint Management System"}</AppText>
        <Image
          style={styles.logo}
          source={require("../assets/complaint.png")}
        />
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
          />
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
          />
          <SubmitButton name="Login" />
          <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate("Third")} margin ={"20"}>Back</Text>
          </TouchableOpacity>
        </AppForm>
     </Screen>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
export default LoginScreen;
