import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const initialMessage = [
  {
    id: 1,
    title: "test",
    subTitle: "testsub",
    image: require("../assets/pizza.jpeg"),
  },
  {
    id: 2,
    title: "test2",
    subTitle: "testsub2",
    image: require("../assets/pizza.jpeg"),
  },
  {
    id: 3,
    title: "test3",
    subTitle: "testsub3",
    image: require("../assets/pizza.jpeg"),
  },
];

function Messagesscreen(props) {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);

  const handDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("message selected ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "test3",
              subTitle: "testsub3",
              image: require("../assets/pizza.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default Messagesscreen;
