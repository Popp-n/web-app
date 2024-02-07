import React, { useState } from "react";
import * as yup from "yup";
import { Form } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "Components/Atoms/Button";
import { FormField, InputField } from "Components/Molecules/FormFields";
import { useApi } from "Utils/Hooks";
// import endpoints from "Services/endpoints";
import { Spinner } from "Components/Atoms/Spinner";
// import httpService from "Services/httpService";
import { CheckBox } from "Components/Molecules/Input";
import { useAuthStore } from "Store";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().min(1).label("Email"),
  password: yup.string().required().min(1).label("Password"),
});

// Component
const LoginForm: React.FC<Props> = () => {
  // States
  const [errorMessage, setErrorMessage] = useState<string>("");

  //   Variables
  const initialValues = {
    email: "",
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
      password: values.password,
    };

    console.log(
      { requestData },
      userLogIn,
      sendRequest,
      setErrorMessage,
      sendRequest,
      sendRequest,
      navigate
    );

    // Send to backend
    // const res = await sendRequest("POST", endpoints.signUpUrl, requestData);

    // if (res.data) {
    //   userLogIn(res.data);
    //   const userData = res.data;
    //   const { accessToken } = userData;
    //   httpService.setToken(accessToken);
    //   navigate("/about-you");
    // } else {
    //   setErrorMessage(res?.response?.data?.message);
    // }
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
        <InputField placeholder="Email" name="email" type="email" />
        <InputField placeholder="Password" name="password" type="password" />

        <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
          <CheckBox label="Keep me logged in" />

          <Link to="/forget-password" className="l l-3">
            Forgot Password?
          </Link>
        </Flex>
        <Button
          type="submit"
          className="btn-full btn-hover--1 btn-4 b-5 btn-md mt-40 ff"
        >
          {loading ? (
            <Spinner style={{ width: "1.3rem", height: "1.3rem" }} />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </FormField>
  );
};

export default LoginForm;
