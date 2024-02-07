import React from "react";
import { Left, Right } from "./style";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { ForgetPasswordForm } from "Components/Organisms/Forms";

// Type defination
interface Props {}

// Component
const ForgetPassword: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Link to="/sign-up" className="remove-on-sm-vp">
            <ArrowLeftIcon className="back-icon" />
          </Link>
          <div className="heading-box">
            <Typography
              as="h3"
              className="h-18 max-width-450"
              text="Forgot Password"
            />
          </div>

          <Typography
            as="p"
            className="p-16 mt-20 remove-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 remove-on-sm-vp">
            <>
              You can{" "}
              <Link to="/sign-up" className="l p-17">
                Sign up !{" "}
              </Link>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography as="h5" className="h-22 mb-30">
            We will send you reset instructions
          </Typography>

          <ForgetPasswordForm />

          <Typography
            as="p"
            className="p-16 mt-60 text-center display-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 text-center display-on-sm-vp">
            <>
              You can{" "}
              <Link to="/sign-up" className="l p-17">
                Sign up !{" "}
              </Link>
            </>
          </Typography>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default ForgetPassword;
