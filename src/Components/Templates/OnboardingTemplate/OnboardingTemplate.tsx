import React from "react";
import { Container, Nav, Wrapper } from "./style";
import { Logo } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const OnboardingTemplate: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Nav>
        <Container>
          <Logo />
        </Container>
      </Nav>
    </Wrapper>
  );
};

export default OnboardingTemplate;
