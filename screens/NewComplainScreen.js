import React, { useEffect } from "react";
import * as Yup from "yup";
import { StyleSheet, ScrollView } from "react-native";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import useLocation from "../hooks/useLocation";
import complaintAPI from "../api/complaint";
import UploadScreen from "./UploadScreen";
import { useState } from "react";

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
  { label: "Clothing", value: "Clothing" },
  { label: "Camera", value: "Camera" },
];

const complainSubCategory = [
  { label: "Furniture", value: "Furniture" },
  { label: "Clothing", value: "Clothing" },
  { label: "Camera", value: "Camera" },
];

function NewComplainScreen() {
  const mylocation = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (complaint, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await complaintAPI.addComplain(
      { ...complaint, mylocation },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert(
        "Uable to submit request at the moment. Please try again later!!" +
          console.log("wahala wa ooo 0 " + result.data)
      );
    }
    resetForm();
    alert("success");
  };

  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppText style={styles.title}>{"Complain Form"}</AppText>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
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
          <SubmitButton name="POST" style={styles.submitButton} />
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
