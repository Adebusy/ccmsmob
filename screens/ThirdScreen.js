import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
function ThirdScreen({ navigation }) {
  const recObject = {
    title: "CCMS",
    subTitle: "Customer Complain Management System",
  };

  return (
    <View style={styles.homescreencss}>
        <View style={styles.topsmodule}><AppText>{"Pleasant Bank"}</AppText>
        <AppText>{"Customer Complaint Management System"}</AppText>
    </View>
        
      <Card
        title="CCMS"
        subTitle="Customer Complain Management System"
        image={require("../assets/complaint.png")}
      />
       <View style={styles.buttonsContainer}>
       <View >
        <AppText>{"Are you our customer?"}</AppText>
        <AppText style={styles.title} numberOfLine={1}>{"To log complain about our products and services, you must have an account with us. For non-account holder, please follow the promps.  "}</AppText>
       </View>
      <View style={styles.onboard}>
        <AppButton title="Yes" onPress={() => navigation.navigate("Login")} margin ={"20"} />
        <AppButton title="No" onPress={() => navigation.navigate("SignupScreen")} margin ={"20"} />
      </View>
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
  onboard: {
    flexDirection: "row",
    padding: 50,
    width: "100%",
  },
  topsmodule:{
    width: "100%",
    alignItems:"center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ThirdScreen;
