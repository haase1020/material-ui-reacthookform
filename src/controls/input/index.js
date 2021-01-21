import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import "./index.css";

//have to register each form you use (helps with submission and validation)
// each form field should have a unique name associated with it
function FormInput(props) {
  const { control } = useFormContext();
  const { name, label, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue=""
      label={label}
      fullWidth={true}
      InputLabelProps={{
        className: required ? "required-label" : "",
        required: required || false,
      }}
      error={isError}
      helperText={errorMessage}
      {...props}
    />
  );
}

export default FormInput;
