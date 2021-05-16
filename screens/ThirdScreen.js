import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
function ThirdScreen({ navigation }) {
  const recObject = {
    title: "CCMS",
    subTitle: "Customer Complain Management System",
  };

  return (
    <Screen style={styles.container}>
    <View style={styles.homescreencss}>
        <View style={styles.topsmodule}><AppText>{"Pleasant Bank"}</AppText>
    </View>        
      <Card
        title="CCMS"
        subTitle="Complain Management System"
        image={require("../assets/complaint.png")}
      />
       <View style={styles.buttonsContainer}>
       <View >
        <AppText style={styles.title}>{"Are you our customer?"}</AppText>
        <AppText style={styles.title} numberOfLine={1}>{"To log complain about our products or services, you must have an account with us. For non-account holder, please follow the promps.  "}</AppText>
       </View>
      <View style={styles.onboard}>
        <AppButton title="Yes" onPress={() => navigation.navigate("Login")} margin ={"20"} />
        <AppButton title="No" onPress={() => navigation.navigate("Signup")} margin ={"20"} />
      </View>
    </View>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  homescreencss: {
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
    alignContent :"center",
    alignItems: "center"
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
    alignItems: "center",
    width: "100%",
    alignItems:"center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  }, container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ThirdScreen;
