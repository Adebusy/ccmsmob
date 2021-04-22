import NetInfo , {useNetInfo} from "@react-native-community/netinfo";
import React from "react";
import { Button, View } from "react-native";

import AppText from "../components/AppText";

export default function CheckNetworkCon(){
const netInfo  =useNetInfo();
return netInfo.isInternetReachable ? <View> <AppText style={styles.title}>{"Welcome"}</AppText></View> :<View><AppText style={styles.title}>{"Internet not ditected."}</AppText></View>
}