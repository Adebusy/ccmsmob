import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListActions({ size = 70, IconName }) {
  return (
    <View style={styles.image}>
      <MaterialCommunityIcons
        name={IconName}
        size={size * 0.5}
        color={colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
export default ListActions;
