import React from "react";
import * as Yup from "yup";
import { StyleSheet, ScrollView, Alert } from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import useLocation from "../hooks/useLocation";
import complaintAPI from "../api/complaint";
import {useContext} from "react";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  complaintdescription: Yup.string().required().label("complaintdescription"),
  totalAmount: Yup.number().required().min(1).max(10000).label("totalAmount"),
  amountRecovered: Yup.number()
    .required()
    .min(1)
    .max(10000)
    .label("amountRecovered"),
  transactionDate: Yup.string().required().label("transactionDate"),
  complaintSubject: Yup.string().label("complaintSubject"),
  prayer: Yup.string().label("prayer"),
  complainCategory: Yup.object()
    .required()
    .nullable()
    .label("complainCategory"),
  complaintSubCat: Yup.object().required().nullable().label("complaintSubCat"),
});

const complainCategory = [
  { label: "ATM", value: "ATM" },
  { label: "POS", value: "POS" },
  { label: "CARDLESS", value: "CARDLESS" },
];

const complainSubCategory = [
  { label: "Dispense Error", value: "Dispense Error" },
  { label: "Unabl", value: "Clothing" },
  { label: "Camera", value: "Camera" },
];

function NewComplainScreen({navigation}) {
  const authContext = useContext(AuthContext);
  const mylocation = useLocation();
  const handleSubmit = async ({complaintdescription, totalAmount, amountRecovered, transactionDate, complainCategory, complaintSubCat, complaintSubject, prayer}, {resetForm}) => {
    console.log(mylocation);
    const result = await complaintAPI.addComplain({complaintdescription, totalAmount, amountRecovered, transactionDate, complainCategory, complaintSubCat, complaintSubject, prayer, mylocation});
    if (!result.ok) {
      return alert(
        "Uable to submit request at the moment. Please try again later!!" +
          console.log("wahala wa ooo 0 " + result.data)
      );
    }
    resetForm();
    Alert.alert(
      'success!!!',
      `${result.data}`,
      [
        {
          text: 'Ok',
          onPress: () => navigation.navigate("ListingComplainDetail",{complaintdescription: complaintdescription, totalAmount: totalAmount, amountRecovered: amountRecovered, transactionDate: transactionDate, complainCategory: complainCategory, complaintSubCat: complaintSubCat, complaintSubject: complaintSubject, prayer: prayer,complaintType:"fddfdf"})
        }
      ],
      {cancelable: false},
    );
  };

  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppText style={styles.title}>{"Complain Form"}</AppText>
        
        <AppForm
          initialValues={{
            complaintdescription: "",
            totalAmount: "",
            amountRecovered: "",
            transactionDate: "",
            complainCategory: null,
            complaintSubCat: null,
            complaintSubject: "",
            prayer: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            maxLength={50}
            name="complaintSubject"
            multiline
            numberOfLines={2}
            placeholder="Complain subject"
          />
          <AppFormPicker
            items={complainCategory}
            name={"complainCategory"}
            placeholder={"Category Category"}
            width="100%"
          />

          <AppFormPicker
            items={complainSubCategory}
            name={"complaintSubCat"}
            placeholder={"Complain Sub-Category"}
            width="100%"
          />
          <AppFormField
            maxLength={255}
            name="complaintdescription"
            multiline
            numberOfLines={3}
            placeholder="Complaint Description"
          />
          <AppFormField
            maxLength={10}
            name="transactionDate"
            placeholder="Transaction date (MM-DD-YYYY)"
            keyboardType="numeric"
          />
          <AppFormField
            maxLength={10}
            name="totalAmount"
            placeholder="Total Amount(0.00)"
            keyboardType="numeric"
          />
          <AppFormField
            maxLength={10}
            name="amountRecovered"
            placeholder="Amount Recovered(0.00)"
            keyboardType="numeric"
          />
          <AppFormField
            maxLength={255}
            name="prayer"
            multiline
            numberOfLines={3}
            placeholder="Prayer(What do you want us to do?)"
          />
          <SubmitButton name="Log Complain" style={styles.submitButton} />
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
});

export default NewComplainScreen;
