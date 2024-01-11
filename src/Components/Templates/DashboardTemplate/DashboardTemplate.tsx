import React, { AllHTMLAttributes } from "react";
import { DashboardTopNav } from "Components/Molecules/TopNav";
import { Body, Container } from "./style";

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
    </>
  );
};

export default DashboardTemplate;
