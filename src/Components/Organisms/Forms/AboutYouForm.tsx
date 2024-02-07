import React, { useState } from "react";
import * as yup from "yup";
import { Form } from "formik";
import { useNavigate } from "react-router-dom";

import { Button } from "Components/Atoms/Button";
import {
  FormField,
  InputField,
  SelectField,
} from "Components/Molecules/FormFields";
import { useApi } from "Utils/Hooks";
// import endpoints from "Services/endpoints";
import { Spinner } from "Components/Atoms/Spinner";
// import httpService from "Services/httpService";
import { Range } from "Components/Molecules/Input";
import { useAuthStore } from "Store";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";

// Type defination
interface Props {}

const validationSchema = yup.object().shape({
  dob: yup.string().required().min(1).label("Date of birth"),
  userName: yup.string().required().min(1).label("User name"),
  phoneNumber: yup.string().required().min(1).label("Phone number"),
  country: yup.string().required().min(1).label("Country"),
  state: yup.string().required().min(1).label("State"),
});

// Component
const AboutYouForm: React.FC<Props> = () => {
  // States
  const [errorMessage, setErrorMessage] = useState<string>("");

  //   Variables
  const initialValues = {
    dob: "",
    userName: "",
    phoneNumber: "",
    country: "",
    state: "",
  };

  // Hooks
  const navigate = useNavigate();
  const { loading, sendRequest } = useApi<any>();

  // Store
  const { userLogIn } = useAuthStore();

  // Methods
  const handleSubmit = async (values: any) => {
    const requestData = {
      ...values,
    };
    console.log({
      requestData,
      userLogIn,
      sendRequest,
      navigate,
      setErrorMessage,
    });

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

        <Range className="mb-20" />
        <InputField name="dob" placeholder="Birthday (DD/MM/YYYY)" />
        <InputField name="userName" placeholder="User Name" />
        <SelectField options={[]} name="country" placeholder="Select country" />
        <SelectField options={[]} name="state" placeholder="Select state" />
        <InputField name="phoneNumber" placeholder="Phone Number" noMargin />

        <Button
          type="submit"
          className="btn-full btn-hover--1 btn-4 b-5 btn-md mt-40 ff"
        >
          {loading ? (
            <Spinner style={{ width: "1.3rem", height: "1.3rem" }} />
          ) : (
            "Next"
          )}
        </Button>
      </Form>
    </FormField>
  );
};

export default AboutYouForm;
