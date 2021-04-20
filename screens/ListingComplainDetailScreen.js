import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import Screen from "../components/Screen";
import AppText from "../components/AppText";

function ListingComplainDetailScreen({ route }) {
  const listings = route.params;
  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppText style={styles.title}>{"Complain details"}</AppText>
        <AppForm
          initialValues={{
            complaintType: listings.complaintType,
            complaintCategory: listings.complaintCategory,
            complaintSubCategory: listings.complaintSubCategory,
            complaintDescription: listings.complaintDescription,
            disputeAmount: listings.disputeAmount,
            amountRefunded: listings.amountRefunded,
            complaintSubject: listings.complaintSubject,
            prayer: listings.prayer,
            comment: listings.comment,
            status: "closed",
            ResolutionComment: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          <AppFormField name="complaintCategory" disable="true" />
          <AppFormField name="complaintSubCategory" disable="true" />
          <AppFormField
            name="complaintDescription"
            multiline
            numberOfLines={3}
            disable="true"
          />
          <AppFormField maxLength={10} name="disputeAmount" disable="true" />
          <AppFormField name="amountRefunded" disable="true" />
          <AppFormField
            name="prayer"
            multiline
            numberOfLines={3}
            disable="true"
          />
          <AppFormField
            name="ResolutionComment"
            multiline
            numberOfLines={3}
            disable="true"
          />
          <AppFormField name="status" disable="true" />
          <AppFormField
            name="Comment"
            multiline
            numberOfLines={3}
            placeholder="Input your final comment"
          />
          <SubmitButton name="Submit" style={styles.submitButton} />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    padding: 50,
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
