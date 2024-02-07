import React from "react";
import { Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";
import { SignUpForm } from "Components/Organisms/Forms";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const SignUp: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Typography
            as="h3"
            className="h-18 center-on-sm-vp"
            text="Join the"
          />
          <Typography as="h5" className="mt-10 h-19 center-on-sm-vp">
            <>
              <img
                src="/assets/images/poppn-logo-animation.gif"
                alt=""
                className="image-text"
              />{" "}
              Revolution
            </>
          </Typography>

          <Typography
            as="p"
            className="p-16 mt-60 remove-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 remove-on-sm-vp">
            <>
              You can{" "}
              <Link to="/login" className="l p-17">
                Login here!{" "}
              </Link>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography
            as="h5"
            className="h-20 mb-30 remove-on-sm-vp"
            text="Sign Up"
          />

          <SignUpForm />

          <Typography
            as="p"
            className="p-16 mt-60 text-center display-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 text-center display-on-sm-vp">
            <>
              You can{" "}
              <Link to="/login" className="l p-17">
                Login here!{" "}
              </Link>
            </>
          </Typography>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default SignUp;
