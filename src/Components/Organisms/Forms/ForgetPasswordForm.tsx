import React, { useState } from "react";
import * as yup from "yup";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

import { Button } from "Components/Atoms/Button";
import { FormField, InputField } from "Components/Molecules/FormFields";
import { useApi } from "Utils/Hooks";
import { Spinner } from "Components/Atoms/Spinner";
import { useAuthStore } from "Store";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";
// import endpoints from "Services/endpoints";
// import httpService from "Services/httpService";

// Type defination
interface Props {}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().min(1).label("Email"),
});

// Component
const ForgetPasswordForm: React.FC<Props> = () => {
  // States
  const [errorMessage, setErrorMessage] = useState<string>("");

  //   Variables
  const initialValues = {
    email: "",
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
    };

    console.log({
      setErrorMessage,
      navigate,
      sendRequest,
      userLogIn,
      requestData,
    });

    // Send to backend
    // const res = await sendRequest("POST", endpoints.loginUrl, requestData);

    // if (res.data) {
    //   userLogIn(res.data);
    //   const userData = res.data;
    //   const { accessToken } = userData;
    //   httpService.setToken(accessToken);
    //   navigate("/dashboard");
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

        <Button
          type="submit"
          className="btn-full btn-hover--1 btn-4 b-5 btn-md mt-40 ff"
        >
          {loading ? (
            <Spinner style={{ width: "1.3rem", height: "1.3rem" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </FormField>
  );
};

export default ForgetPasswordForm;
