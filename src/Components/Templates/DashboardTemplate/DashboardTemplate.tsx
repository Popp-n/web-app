import React, { AllHTMLAttributes } from "react";
import { DashboardTopNav } from "Components/Molecules/TopNav";
import { Body, Container, Footer } from "./style";
import { FooterDown } from "Components/Organisms/Footer";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {}

// Component
const DashboardTemplate: React.FC<Props> = ({ children }) => {
  // Data to display
  return (
    <>
      <DashboardTopNav />
      <Body>
        <Container>{children}</Container>
      </Body>

      <Footer>
        <Container>
          <FooterDown />
        </Container>
      </Footer>
    </>
  );
};

export default DashboardTemplate;
