import React from "react";
import { useField } from "formik";

import { SelectFieldProps } from "./types";
import { Select } from "Components/Molecules/Input";

// Component
const SelectField: React.FC<SelectFieldProps> = ({ name, ...otherProps }) => {
  // Hooks
  const [field, meta] = useField(name);

  // Data to display
  return (
    <Select
      errorMessage={meta.touched && meta.error ? meta.error : null}
      {...field}
      {...otherProps}
    />
  );
};

export default SelectField;
