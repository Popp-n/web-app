import React from "react";

import { Container, Wrapper, TopNavLinks, TopNavCtas } from "./style";

import { LogoLink } from "Components/Atoms/LogoLink";
import { AppLink } from "Components/Atoms/AppLink";
import { Button } from "Components/Atoms/Button";
import { Link, useLocation } from "react-router-dom";
import { MobileMenuIcon } from "Components/Atoms/SvgIcons";

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
        <TopNavLinks className="remove-on-ssm-vp">
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
          <Link to="/login" className="l remove-on-ssm-vp">
            <Button className="btn-naked b-2" value="Login" />
          </Link>
          <Link to="/sign-up" className="l remove-on-ssm-vp">
            <Button className="btn-primary b-1 btn-hover--1" value="Sign up" />
          </Link>
          <Button className="display-on-ssm-vp">
            <MobileMenuIcon className="" />
          </Button>
        </TopNavCtas>
      </Container>
    </Wrapper>
  );
};

export default TopNav;
