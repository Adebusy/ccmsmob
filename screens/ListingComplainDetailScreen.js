import React from "react";
import { StyleSheet, ScrollView ,View} from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

function ListingComplainDetailScreen({ route, navigation }) {
  const listings = route.params;
  console.log(listings);
  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppText style={styles.title}>{"Complain details"}</AppText>
        <AppForm
          initialValues={{
            complaintType: "",
            complaintCategory: listings.complainCategory,
            complaintSubCategory: listings.complaintSubCat,
            complaintDescription: listings.complaintdescription,
            disputeAmount: listings.totalAmount,
            amountRefunded: listings.amountRecovered,
            complaintSubject: listings.complaintSubject,
            prayer: "listings.prayer",
            comment: "listings.comment",
            status: "closedss",
            ResolutionComment: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          <AppFormField name="complaintCategory" disable="true" value={listings.complainCategory}/>
          <AppFormField name="complaintSubCategory" disable="true" value={listings.complaintSubCat} />
          <AppFormField
            name="complaintDescription"
            multiline
            numberOfLines={3}
            disable="true" value={listings.complaintdescription}
          />
          <AppFormField maxLength={10} name="disputeAmount" disable="true"  value={listings.totalAmount}/>
          <AppFormField name="amountRefunded" disable="true" value={listings.amountRecovered}/>

          <AppFormField
            name="ResolutionComment"
            multiline
            numberOfLines={3}
            disable="true"  value = {listings.remark}
          />
          <AppFormField name="status" disable="true" value={ listings.status ="0"? "in-progress": "Resolved"} />
          <AppFormField
            name="Comment"
            multiline
            numberOfLines={3}
            placeholder="Input your final comment"
          />                    
          <View style={styles.viewDirection}>
            <View><SubmitButton name="Submits" style={styles.submitButton} margin ={"20"} /></View>
            <View><SubmitButton name="Cancel" style={styles.submitButton} onPress={() => navigation.navigate("ListingComplainScreen")} margin ={"20"}/></View>
          </View>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  viewDirection:{
    flex:1,
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  submitButton: {
    padding: 10,
    width: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default ListingComplainDetailScreen;
