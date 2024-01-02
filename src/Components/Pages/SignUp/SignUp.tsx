import React from "react";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import { Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const SignUp: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Typography as="h3" className="h-18" text="Join the" />
          <Typography as="h5" className="mt-10 h-19">
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
            className="p-16 mt-60"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5">
            <>
              You can <span className="p-17">Login here ! </span>
            </>
          </Typography>
        </Left>
        <Right></Right>
      </>
    </OnboardingTemplate>
  );
};

export default SignUp;
