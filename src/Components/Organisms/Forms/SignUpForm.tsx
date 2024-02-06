import React from "react";
import * as yup from "yup";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

import { Button } from "Components/Atoms/Button";
import { FormField, InputField } from "Components/Molecules/FormFields";
import { useApi } from "Utils/Hooks";
import endpoints from "Services/endpoints";
import { Spinner } from "Components/Atoms/Spinner";
import httpService from "Services/httpService";
import { CheckBox } from "Components/Molecules/Input";

// Type defination
interface Props {}

const validationSchema = yup.object().shape({
  email: yup.string().required().min(1).label("Email"),
  firstName: yup.string().required().min(1).label("First Name"),
  lastName: yup.string().required().min(1).label("Last Name"),
  password: yup.string().required().min(1).label("Password"),
});

// Component
const SignUpForm: React.FC<Props> = () => {
  //   Variables
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  // Hooks
  const navigate = useNavigate();
  const { data, loading, sendRequest } = useApi<any>();

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      ...values,
    };

    // Send to backend
    await sendRequest("POST", endpoints.signUpUrl, requestData);
    httpService.setToken(data.access_token);
    navigate("");
  };

  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputField placeholder="First Name" name="firstName" />
        <InputField placeholder="Last Name" name="lastName" />
        <InputField placeholder="Email" name="email" type="email" />
        <InputField placeholder="Password" name="password" type="password" />

        <CheckBox />
        <Button type="submit" className="btn-full btn-4 b-5 btn-md mt-40 ff">
          {loading ? (
            <Spinner style={{ width: "1.3rem", height: "1.3rem" }} />
          ) : (
            "Register"
          )}
        </Button>
      </Form>
    </FormField>
  );
};

export default SignUpForm;