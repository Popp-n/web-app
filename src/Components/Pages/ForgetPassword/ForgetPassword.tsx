import React from "react";
import { Left, Right } from "./style";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Input } from "Components/Molecules/Input";

// Type defination
interface Props {}

// Component
const ForgetPassword: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Link to="/sign-up">
            <ArrowLeftIcon />
          </Link>
          <Typography
            as="h3"
            className="h-18 max-width-450"
            text="Forgot Password"
          />

          <Typography
            as="p"
            className="p-16 mt-20"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5">
            <>
              You can <span className="p-17">Sign up ! </span>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography as="h5" className="h-22 mb-30">
            We will send you reset instructions
          </Typography>
          <Input placeholder="Email Address" />
          <Button className="btn-full btn-4 b-5 btn-md mt-20 ff">Submit</Button>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default ForgetPassword;
