import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
function SecondScreen({ navigation }) {
  const recObject = {
    title: "CCMS",
    subTitle: "Customer Complain Management System",
  };

  return (
    <Screen style={styles.container}>
    <View style={styles.homescreencss}>
        <View><AppText style={styles.title}>{"Pleasant Bank"}</AppText>
    </View>
        
      <Card
        title="CCMS"
        subTitle="Complain Management System"
        image={require("../assets/complaint.png")}
      />
       <View style={styles.buttonsContainer}>
       <View >
        <AppText style={styles.title}>{"Welcome"}</AppText>
        <AppText style={styles.title} numberOfLine={1}>{"At pleasant bank, our complaint management system is the best, we treat and respond your complain(s) within 24hrs."}</AppText>
       </View>
      <View style={styles.onboard}>
        <AppButton title="Skip" onPress={() => navigation.navigate("Login")} margin ={"20"} />
        <AppButton title="Next" onPress={() => navigation.navigate("Third")} margin ={"20"} />
      </View>
    </View>
    </View>
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
  screen: { backgroundColor: colors.light },
});

export default SecondScreen;
