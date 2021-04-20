import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import AppConfig from "../config/styles";
import colors from "../config/colors";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";

function ListingDetailsScreen({ route }) {
  const listings = route.params; //source={require("../assets/pizza.jpeg")}
  return (
    <Screen>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/pizza.jpeg")}
        ></Image>
        <View>
          <AppText style={styles.title}>{listings.title}</AppText>
          <AppText style={styles.subTitle}>${listings.subTitle}</AppText>
        </View>
        <View style={styles.authorcss}>
          <ListItems
            title={AppConfig.Author}
            subTitle={AppConfig.Role}
            image={require("../assets/AlaoRamonPass.jpeg")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 200,
    margin: 10,
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

export default ListingDetailsScreen;
