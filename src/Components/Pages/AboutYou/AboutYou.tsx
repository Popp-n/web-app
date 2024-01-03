import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import React from "react";
import { Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";
import { Input, Range, Select } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const AboutYou: React.FC<Props> = () => {
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
            className="h-18 max-width-350"
            text="Tell us about yourself"
          />

          <Typography
            as="p"
            className="p-16 mt-20"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5">
            <>
              You can <span className="p-17">Login here ! </span>
            </>
          </Typography>
        </Left>
        <Right>
          <Range className="mb-20" />
          <Input placeholder="Birthday (DD/MM/YYYY)" />
          <Input placeholder="User Name" />
          <Select placeholder="Country" />
          <Select placeholder="State" />
          <Input placeholder="Phone Number" noMargin />

          <Button className="btn-full btn-4 b-5 btn-md mt-40 ff">Next</Button>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default AboutYou;
