import React from "react";
import { Formik } from "formik";

import { FormFieldProps } from "./types";

// Component
const FormField: React.FC<FormFieldProps> = (props) => {
  // Props
  const { children, initialValues, onSubmit, validationSchema, setFormValues } =
    props;

  // Data to display
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props: any) => {
        setFormValues && setFormValues!(props.values);
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default FormField;
