import React, { useState } from "react";
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
import { useAuthStore } from "Store";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";

// Type defination
interface Props {}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().min(1).label("Email"),
  firstName: yup.string().required().min(1).label("First Name"),
  lastName: yup.string().required().min(1).label("Last Name"),
  password: yup.string().required().min(1).label("Password"),
});

// Component
const SignUpForm: React.FC<Props> = () => {
  // States
  const [errorMessage, setErrorMessage] = useState<string>("");

  //   Variables
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  // Hooks
  const navigate = useNavigate();
  const { loading, sendRequest } = useApi<any>();

  // Store
  const { userLogIn } = useAuthStore();

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      email: values.email,
      name: `${values.lastName} ${values.firstName}`,
      password: values.password,
    };

    // Send to backend
    const res = await sendRequest("POST", endpoints.signUpUrl, requestData);

    if (res.data) {
      userLogIn(res.data);
      const userData = res.data;
      const { accessToken } = userData;
      httpService.setToken(accessToken);
      navigate("/about-you");
    } else {
      setErrorMessage(res?.response?.data?.message);
    }
  };

  // Data to display
  return (
    <FormField
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {errorMessage && (
          <ErrorMessage className="outer" label={errorMessage} />
        )}
        <InputField placeholder="First Name" name="firstName" />
        <InputField placeholder="Last Name" name="lastName" />
        <InputField placeholder="Email" name="email" type="email" />
        <InputField placeholder="Password" name="password" type="password" />

        <CheckBox />
        <Button
          type="submit"
          className="btn-full btn-hover--1 btn-4 b-5 btn-md mt-40 ff"
        >
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
