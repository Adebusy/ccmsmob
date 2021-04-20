import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Pizza food",
    subTitle: "Testing Pizza",
    image: "../assets/pizza.jpeg",
  },
  {
    id: 2,
    title: "Pizza food2",
    subTitle: "Testing Pizza2",
    image: "../assets/pizza.jpeg",
  },
  {
    id: 3,
    title: "Pizza food3",
    subTitle: "Testing Pizza2",
    image: "../assets/pizza.jpeg",
  },
];

function ListingScreen({ navigation, listings }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          ></Card>
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ListingScreen;
