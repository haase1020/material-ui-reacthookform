import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

//have to register each form you use (helps with submission and validation)
// each form field should have a unique name associated with it
function FormInput(props) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <Controller
      as={TextField}
      name={name}
      control={control}
      defaultValue=""
      label={label}
      fullWidth={true}
      {...props}
    />
  );
}

export default FormInput;
