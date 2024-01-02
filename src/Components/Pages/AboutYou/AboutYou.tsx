import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import React from "react";
import { Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";
import { Input } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const AboutYou: React.FC<Props> = () => {
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
        <Right>
          <Typography as="h5" className="h-20 mb-30" text="Sign Up" />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password" noMargin />

          <Button className="btn-full btn-4 b-5 btn-md mt-40 ff">
            Register
          </Button>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default AboutYou;
