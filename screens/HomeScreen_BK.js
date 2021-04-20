import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
//function Homescreen({ title, subTitle }) {
function Homescreen_BK({ navigation }) {
  return (
    <View style={styles.homescreencss}>
      <Card
        title={title}
        subTitle={subTitle}
        image={require("../assets/complaint.png")}
      />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => console.log("tapped")} />
        <AppButton
          title="Sign Up"
          onPress={() =>
            Alert.alert(
              "Do you have a Pleasant Bank Account?",
              "Please respond ?",
              [
                { text: "yes", onPress: () => console.log("yes") },
                { text: "No", onPress: () => console.log("no") },
              ]
            )
          }
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

export default Homescreen_BK;
