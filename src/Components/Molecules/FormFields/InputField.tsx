import React from "react";
import { useField } from "formik";

import { InputFieldProps } from "./types";
import { Input } from "Components/Molecules/Input";

// Component
const InputField: React.FC<InputFieldProps> = ({ name, ...otherProps }) => {
  // Hooks
  const [field, meta] = useField(name);

  // Data to display
  return (
    <Input
      errorMessage={meta.touched && meta.error ? meta.error : null}
      {...field}
      {...otherProps}
    />
  );
};

export default InputField;
