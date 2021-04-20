import React from "react";

import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size}
        backgroundColor={iconColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Icon;
