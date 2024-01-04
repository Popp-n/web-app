import React from "react";
import { Left, Right } from "./style";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { CheckBox, Input } from "Components/Molecules/Input";
import { Flex } from "Styles/layouts/Flex";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const Login: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Typography as="h3" className="h-18" text="Welcome back" />
          <Typography as="h5" className="mt-10 h-19">
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
            className="p-16 mt-60"
            text="If you don’t have an account"
          />
          <Typography as="p" className="p-16 mt-5">
            <>
              You can <span className="p-17">Sign up! </span>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography as="h5" className="h-20 mb-30" text="Login" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
            <CheckBox label="Keep me logged in" />

            <Link to="/forget-passowrd" className="l l-3">
              Forgot Password?
            </Link>
          </Flex>
          <Button className="btn-full btn-4 b-5 btn-md mt-40 ff">Log In</Button>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default Login;
