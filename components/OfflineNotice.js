import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

//to place the text in apptext at the center we import the below
import Constants from "expo-constants"

//to show this message only when the device is offline

import {useNetInfo} from "@react-native-community/netinfo";

function OfflineNotice() {
    const netInfo  = useNetInfo();
    if(netInfo.type !=="unknown" && netInfo.isInternetReachable ==false){
        return <View style={styles.separator}>
        <AppText style={styles.text}>No internet connection</AppText>
    </View>;
    }
    return null;
}
const styles = StyleSheet.create({
  separator: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text:{
      color: colors.white
  }
});

export default OfflineNotice;
