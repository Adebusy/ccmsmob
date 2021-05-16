import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
function Homescreen({ navigation }) {
  const recObject = {
    title: "CCMS",
    subTitle: "Customer Complain Management System",
  };

  return (
    <View style={styles.homescreencss}>
      <Card
        title="CCMS"
        subTitle="Customer Complain Management System"
        image={require("../assets/complaint.png")}
        onPress={() => navigation.navigate("Login", recObject)}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Sign Up"
          onPress={() => navigation.navigate("Signup")}
          color="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homescreencss: {
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
  },
  buttonsContainer: {
    padding: 50,
    width: "100%",
  },
});

export default Homescreen;
