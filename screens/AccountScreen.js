import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import AppConfig from "../config/AppConfig";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const retObject = [
  {
    title: "Complains",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "ListingComplainScreen",
  },
  {
    title: "Log Complain",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "NewComplainScreen",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={AppConfig.Author}
          subTitle={AppConfig.Role}
          image={require("../assets/AlaoRamonPass.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={retObject}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              backgroundColor={item.icon.backgroundColor}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItems
        title={"Log Out"}
        IconName={"logout"}
        ImageComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"} />}
      ></ListItems>
    </Screen>
  );
}

const styles = StyleSheet.create({
  authorcss: {
    padding: 30,
  },
  container: {
    marginVertical: 20,
  },
  screen: { backgroundColor: colors.light },
  mytextimput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
export default AccountScreen;
