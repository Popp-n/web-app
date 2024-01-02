import React from "react";
import { Body, BodyContainer, Container, Nav, Wrapper } from "./style";
import { Logo } from "Components/Atoms/SvgIcons";
import { OnboardingTemplateProps } from "./types";
import { Link } from "react-router-dom";

// Component
const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
}) => {
  // Data to display
  return (
    <Wrapper>
      <Nav>
        <Container>
          <Link to="/">
            <Logo />
          </Link>
        </Container>
      </Nav>

      <Body>
        <BodyContainer>{children}</BodyContainer>
      </Body>
    </Wrapper>
  );
};

export default OnboardingTemplate;
