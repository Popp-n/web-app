import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import React from "react";
import { GoalsBox, Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";
import { CheckBox, Input, Range, Select } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

// Type defination
interface Props {}

// Component
const CreateChallenge: React.FC<Props> = () => {
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
            className="h-18 max-width-420"
            text="Create Brand Profile"
          />

          <Typography as="p" className="p-16 mt-20 max-width-350">
            Tell us about your brand to get started creating challenges
          </Typography>
        </Left>
        <Right>
          <Range className="mb-20" />
          <Input placeholder="Brand or Organisation Name" />

          <Typography as="h5" className="h-30" text="Brand Goals" />
          <GoalsBox>
            <CheckBox label="Build brand awareness/promote a product" />
            <CheckBox label="Increase use of sound or song" />
            <CheckBox label="Encourageapp downloads and/or site traffic" />
            <CheckBox label="Connect my brand with big creators" />
          </GoalsBox>

          <Select placeholder="Annual Influence Budget" />
          <Select placeholder="Nigeria" />
          <Input placeholder="+234-81465898" noMargin />

          <Button className="btn-full btn-4 b-5 btn-md mt-40 ff">Finish</Button>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default CreateChallenge;
