import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Button } from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import complainApi from "../api/complaint";
import AppText from "../components/AppText";
import AppButton from "../components/forms/SubmitButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useAPI from "../hooks/useAPI";
//we cannot pass an async function into an effect hook useEffect
function ListingComplainScreen({ navigation }) {
  const [messages, setMessages] = useState(complaints);
  const [refreshing, setRefreshing] = useState(false);

  const { data: complaints, error, loading, request: getComplaint } = useAPI(
    complainApi.getComplaints
  );
  useEffect(() => {
    getComplaint();
  }, []);

  //const handDelete = (message) => {
  //setMessages(messages.filter((m) => m.id !== message.id));
  //};

  return (
    <Screen>
      {error && (
        <>
          <AppText>error occured</AppText>
          <AppButton title="retry" onPress={getComplaint} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      {
        <FlatList
          data={complaints}
          keyExtractor={(complaint) => toString(complaint.id)}
          renderItem={({ item }) => (
            <ListItems
              title={item.complaintCategory}
              subTitle={item.complaintSubCategory}
              image={item.image}
              onPress={() =>
                navigation.navigate("ListingComplainDetailScreen", item)
              }
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() =>
                    navigation.navigate("ListingComplainDetailScreen", item)
                  }
                /> //<ListItemDeleteAction onPress={() => handDelete(item)} /> (to call method upon button click)
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
      }
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default ListingComplainScreen;
