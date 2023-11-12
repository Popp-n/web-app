import React from "react";
import { AppLink } from "Components/Atoms/AppLink";
import { Logo } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const LogoLink: React.FC<Props> = () => {
  // Data to display
  return (
    <AppLink to="/">
      <Logo />
    </AppLink>
  );
};

export default LogoLink;
