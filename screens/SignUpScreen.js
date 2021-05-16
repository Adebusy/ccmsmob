import React from "react";
import { StyleSheet, View, Alert ,TouchableOpacity} from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import users from "../api/users";
import { useEffect } from "react";
import complaintAPI from "../api/complaint";

const titleObj = [
  { label: "Mr", value: 1 },
  { label: "Mrs", value: 2 },
  { label: "Miss", value: 3 },
];

function SignUpScreen({ navigation }) {
  const handleSubmit = async ({dateOfBirth, email, fullName, password, phone, postalCode, title, homeNumber, street}, {resetForm}) => {
    let homeAddress = homeNumber + " " + street;
    let titleRec = title.label;
    console.log(homeAddress);
   const result = await users.addNewUser(dateOfBirth, email, fullName, homeAddress, password, phone, postalCode, titleRec);
    if (!result.ok) {
      console.log(result.error)
      return alert(
        "Unable to create new user at the moment. Please try again later!!!"
      );
    }
    console.log("handleSubmit2");
    resetForm();
    Alert.alert(
         'success!!!',
         `Succcess!!! Profile and Account opened sucessfully!!!. Your account number is ${result.data.AccountNo}`,
         [
           {
             text: 'Ok',
             onPress: () => navigation.navigate("Login")
           }
         ],
         {cancelable: false},
       );
  };

   const { data: titles, error, loading, request: getTitles } = useAPI(
     complaintAPI.getTitles
   );

   useEffect(() => {
     getTitles();
   }, []);

  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>{"Account Opening"}</AppText>
      <AppForm
        initialValues={{
          title: "",
          fullName: "",
          dateOfBirth: "",
          street: "",
          homeNumber: "",
          city: "",
          postalCode: "",
          email: "",
          phone: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <AppFormPicker
          items={titleObj}
          name={"title"}
          placeholder={"Title"}
          width="100%"
        />
        <AppFormField
          maxLength={30}
          name="fullName"
          placeholder="Fullname"
          autoCorrect={false}
        />

        <AppFormField
          maxLength={10}
          name="dateOfBirth"
          placeholder="Date of birth (MM-DD-YYYY)"
          autoCorrect={false}
        />

        <View style={styles.address}>
          <View>
          <AppFormField
            maxLength={3}
            name="homeNumber"
            placeholder="House No."
            keyboardType="numeric"
            autoCorrect={false}
          />
          </View>
          <AppFormField
            maxLength={50}
            name="street"
            placeholder="Street name"
            autoCorrect={false}
          />
        </View>
        <View style={styles.address}>
        <View><AppFormField
            maxLength={8}
            name="postalCode"
            placeholder="Postal code"
            autoCorrect={false}
          /></View>
          <AppFormField maxLength={30} name="city" placeholder="City" />        
        </View>

        <AppFormField
          maxLength={40}
          name="email"
          placeholder="Email address"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalized="none"
        />
        <AppFormField
          maxLength={11}
          name="phone"
          placeholder="Phone number "
          keyboardType="numeric"
          autoCorrect={false}
        />
        <AppFormField
          maxLength={10}
          name="password"
          placeholder="Password"
          secureTextEntry
          autoCapitalized="none"
        />
        <SubmitButton name="Login" />
      </AppForm>
      <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate("Third")} margin ={"20"}>Back</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    padding: 50,
    width: "50%",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  address: {
    flexDirection: "row",
  },
});

export default SignUpScreen;
