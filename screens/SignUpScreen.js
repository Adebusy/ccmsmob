import React from "react";
import * as Yup from "yup";
import { StyleSheet, View } from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import users from "../api/users";
import { useState } from "react";
import complaintAPI from "../api/complaint";

const validationSchema = Yup.object().shape({
  title: Yup.object().required().nullable().label("title"),
  firstName: Yup.string().required().min(1).max(30).label("firstName"),
  lastName: Yup.string().required().min(1).max(30).label("lastName"),
  dateOfBirth: Yup.string().required().max(10).label("dateOfBirth"),
  street: Yup.string().required().min(1).max(30).label("street"),
  homeNumber: Yup.string().required().min(1).max(10).label("homeNumber"),
  city: Yup.number().required().min(1).max(30).label("city"),
  postalCode: Yup.string().min(1).max(10).label("postalCode"),
  email: Yup.string().min(1).max(50).label("email"),
  phone: Yup.number().required().label("phone"),
  password: Yup.string().min(1).max(50).label("password"),
});

const titleObj = [
  { label: "Mr", value: 1 },
  { label: "Mrs", value: 2 },
  { label: "Miss", value: 3 },
];

function SignUpScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (newUser) => {
    setProgress(0);
    setUploadVisible(true);
    console.log("heere 1");
    const result = await users.addNewUser(newUser);
    if (!result.ok) {
      setUploadVisible(false);
      return alert(
        "Unable to create new user at the moment. Please try again later!!!"
      );
    }
    resetForm();
    alert(
      "Porfile created and Account opened sucessfully!!!. Your account number is " +
        result.data
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
          firstName: "",
          lastName: "",
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
        validationSchema={validationSchema}
      >
        <AppFormPicker
          items={titleObj}
          name={"title"}
          placeholder={"Title"}
          width="100%"
        />
        <AppFormField
          maxLength={30}
          name="firstName"
          placeholder="First Name"
          autoCorrect={false}
        />

        <AppFormField maxLength={30} name="lastName" placeholder="Last Name" />
        <AppFormField
          maxLength={10}
          name="dateOfBirth"
          placeholder="Date of birth (MM-DD-YYYY)"
          autoCorrect={false}
        />

        <View style={styles.address}>
          <AppFormField
            maxLength={50}
            name="street"
            placeholder="Street name"
            autoCorrect={false}
          />
          <AppFormField
            maxLength={3}
            name="homeNumber"
            placeholder="House number"
            keyboardType="numeric"
            autoCorrect={false}
          />
        </View>
        <View style={styles.address}>
          <AppFormField maxLength={30} name="city" placeholder="City" />
          <AppFormField
            maxLength={8}
            name="postalCode"
            placeholder="Postal code"
            autoCorrect={false}
          />
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
          maxLength={10}
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
        <SubmitButton name="Submit" style={styles.submitButton} />
      </AppForm>
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
