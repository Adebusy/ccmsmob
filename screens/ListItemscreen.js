import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";
import colors from "../config/colors";
import AppConfig from "../config/AppConfig";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Screen from "../components/Screen";
import Card from "../components/Card";

function ListItemscreen({ title, subTitle, image, onPress, navigation }) {
  return (
    <Screen flex={1}>
      <Card
        title="Pizza size 9"
        subTitle="$100"
        image={require("../assets/pizza.jpeg")}
        onPress={() => navigation.navigate("ComplaintScreen")}
      />
      <View style={styles.authorcss}>
        <ListItems
          title={AppConfig.Author}
          subTitle={AppConfig.Role}
          image={require("../assets/AlaoRamonPass.jpeg")}
        />
      </View>
      {/* <View>
          <Image
            style={styles.image}
            source={require("../assets/pizza.jpeg")}
          ></Image>
          <View>
            <AppText style={styles.title}>Pizza size 9</AppText>
            <AppText style={styles.subTitle}>$100</AppText>
          </View>
          <View style={styles.authorcss}>
            <ListItems
              title={AppConfig.Author}
              subTitle={AppConfig.Role}
              image={require("../assets/AlaoRamonPass.jpeg")}
            />
          </View>
        </View> */}
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    color: colors.secondary,
  },
  authorcss: {
    padding: 30,
  },
});
export default ListItemscreen;
