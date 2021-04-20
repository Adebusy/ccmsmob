import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItems({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.primary}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.viewDetails}>
            <AppText>{title}</AppText>
            {subTitle && <AppText>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            sizes={25}
            color={colors.medium}
          ></MaterialCommunityIcons>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  viewDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});

export default ListItems;
