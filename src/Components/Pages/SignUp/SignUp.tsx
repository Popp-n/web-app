import React from "react";
import { Left, Right } from "./style";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { CheckBox, Input } from "Components/Molecules/Input";

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
              You can <span className="p-17">Login here! </span>
            </>
          </Typography>
        </Left>
        <Right>
          <Typography
            as="h5"
            className="h-20 mb-30 remove-on-sm-vp"
            text="Sign Up"
          />
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password" />
          <CheckBox />
          <Button className="btn-full btn-4 b-5 btn-md mt-40 ff">
            Register
          </Button>

          <Typography
            as="p"
            className="p-16 mt-60 text-center display-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 text-center display-on-sm-vp">
            <>
              You can <span className="p-17">Login here! </span>
            </>
          </Typography>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default SignUp;
