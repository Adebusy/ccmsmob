import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ name }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={name} onPress={handleSubmit} />;
}

export default SubmitButton;
