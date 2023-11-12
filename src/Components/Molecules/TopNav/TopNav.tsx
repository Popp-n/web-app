import React from "react";

import { Container, Wrapper, TopNavLinks, TopNavCtas } from "./style";

import { LogoLink } from "Components/Atoms/LogoLink";
import { AppLink } from "Components/Atoms/AppLink";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const TopNav: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Container>
        <LogoLink />
        <TopNavLinks>
          <AppLink to="/" label="Home" />
          <AppLink to="/" label="creators" />
          <AppLink to="/" label="Brand" />
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
