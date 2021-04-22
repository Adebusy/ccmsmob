import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
//to make use of cache image import the below
import {Image} from "react-native-expo-image-cache";

function CardForCacheImage({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} uri ={imageUrl} />
        <View style={styles.detailsContainer}></View>
        <View style={styles.subTitleView}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    //color: colors.secondary,
    fontWeight: "bold",
  },
  subTitleView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CardForCacheImage;
