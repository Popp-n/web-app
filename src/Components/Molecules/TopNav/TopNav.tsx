import React from "react";

import { Container, Wrapper, TopNavLinks, TopNavCtas } from "./style";

import { LogoLink } from "Components/Atoms/LogoLink";
import { AppLink } from "Components/Atoms/AppLink";
import { Button } from "Components/Atoms/Button";
import { useLocation } from "react-router-dom";

// Type defination
interface Props {}

// Component
const TopNav: React.FC<Props> = () => {
  // Hooks
  const { pathname } = useLocation();

  // Methods
  const isActive = (path: any) => {
    return path === pathname;
  };

  // Data to display
  return (
    <Wrapper>
      <Container>
        <LogoLink />
        <TopNavLinks>
          <AppLink
            to="/"
            label="Home"
            className={`${isActive("/") ? "active" : ""}`}
          />
          <AppLink
            to="/creators"
            label="creators"
            className={`${isActive("/creators") ? "active" : ""}`}
          />
          <AppLink
            to="/brands"
            label="Brand"
            className={`${isActive("/brands") ? "active" : ""}`}
          />
        </TopNavLinks>
        <TopNavCtas>
          <Button className="btn-naked b-2" value="Login" />
          <Button className="btn-primary b-1" value="Sign up" />
        </TopNavCtas>
      </Container>
    </Wrapper>
  );
};

export default TopNav;
