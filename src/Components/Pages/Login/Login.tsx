import React from "react";
import { Left, Right } from "./style";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { LoginForm } from "Components/Organisms/Forms";

// Type defination
interface Props {}

// Component
const Login: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Typography
            as="h3"
            className="h-18 center-on-sm-vp"
            text="Welcome back"
          />
          <Typography as="h5" className="mt-10 h-19 center-on-sm-vp">
            <>
              <img
                src="/assets/images/poppn-logo-animation.gif"
                alt=""
                className="image-text"
              />{" "}
              Family
            </>
          </Typography>
          <Typography
            as="p"
            className="p-16 mt-60 remove-on-sm-vp"
            text="If you don’t have an account"
          />
          <Typography as="p" className="p-16 mt-5 remove-on-sm-vp">
            <>
              You can{" "}
              <Link to="/sign-up" className="l p-17">
                Sign up!{" "}
              </Link>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography
            as="h5"
            className="h-20 mb-30 remove-on-sm-vp"
            text="Login"
          />

          <LoginForm />

          <Typography
            as="p"
            className="p-16 mt-60 text-center display-on-sm-vp"
            text="If you don’t have an account"
          />
          <Typography as="p" className="p-16 mt-5 text-center display-on-sm-vp">
            <>
              You can{" "}
              <Link to="/sign-up" className="l p-17">
                Sign up!{" "}
              </Link>
            </>
          </Typography>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default Login;
