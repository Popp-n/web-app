import React from "react";
import { Body, BodyContainer, Container, Nav, Wrapper } from "./style";
import { Logo } from "Components/Atoms/SvgIcons";
import { OnboardingTemplateProps } from "./types";
import { Link } from "react-router-dom";
import { PageAnimation } from "../PageAnimation";

// Component
const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
}) => {
  // Data to display
  return (
    <PageAnimation>
      <Wrapper>
        <Nav>
          <Container>
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </Container>
        </Nav>

        <Body>
          <BodyContainer>{children}</BodyContainer>
        </Body>
      </Wrapper>
    </PageAnimation>
  );
};

export default OnboardingTemplate;
