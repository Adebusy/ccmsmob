import React ,{useContext, useEffect, useState} from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AuthContext from "../auth/context";
import  storage from "../auth/storage";
import InfoText from "../components/label";

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

function AccountScreen({ navigation, route }) {
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const { setUser } = useContext(AuthContext);
  const handleLogOut =() =>{
    () =>setUser(null);
    storage.removeToken();
  }
  useEffect(() => {
    setMail("alao.adebusy@gmail.com");
    setTitle("alao Ramon");
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title={"mail"}
          subTitle={"title"}
          image={require("../assets/AlaoRamonPass.jpeg")}
        />
      </View>
      <InfoText text="Account" />
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
        ImageComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"} onPress ={handleLogOut}/>}
      />
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
