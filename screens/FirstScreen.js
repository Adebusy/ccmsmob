import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
function FirstScreen({ navigation }) {
  const recObject = {
    title: "CCMS",
    subTitle: "Customer Complain Management System",
  };

  return (
    <Screen style={styles.container}>    
        <View style={styles.topsmodule}>
        <AppText style={styles.title}>{"Pleasant Bank"}</AppText>
        <AppText>{"Customer Complaint Management System"}</AppText>
        </View>     
      <Card
        title="CCMS"
        subTitle="Complain Management System"
        image={require("../assets/complaint.png")}
      />
       <View style={styles.buttonsContainer}>
       <View >
        <AppText style={styles.title}>{"Welcome"}</AppText>
        <AppText style={styles.title}  numberOfLine={1}>{"You are highly welcome to our compliant management platform. Please let us take you around our home of complaint management system"}</AppText>
       </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Next" onPress={() => navigation.navigate("Second")} />
      </View>
    </View>
    </Screen>  
    );
}


const styles = StyleSheet.create({
  homescreencss: {
    backgroundColor: colors.red,
    padding: 20,
    paddingTop: 100,
  },
  buttonsContainer: {
    padding: 50,
    width: "100%",
  },
  topsmodule:{
    width: "100%",
    alignItems:"center"
  },
  title: {
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  screen: { backgroundColor: colors.light },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FirstScreen;
