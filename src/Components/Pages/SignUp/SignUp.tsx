import React from "react";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import { Wrapper } from "./style";

// Type defination
interface Props {}

// Component
const SignUp: React.FC<Props> = () => {
  // Data to display
  return (
    <OnboardingTemplate>
      <Wrapper></Wrapper>
    </OnboardingTemplate>
  );
};

export default SignUp;
