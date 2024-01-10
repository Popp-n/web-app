import React from "react";
import { TopNav, TopNavContainer, UserAvatar } from "./style";
import { LogoLink } from "Components/Atoms/LogoLink";
import { Button } from "Components/Atoms/Button";
import { LensIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const DashboardTemplate: React.FC<Props> = () => {
  // Data to display
  return (
    <TopNav>
      <TopNavContainer>
        <LogoLink />

        <div className="left">
          <Button>
            <LensIcon />
          </Button>
          <Button className="btn-6">Create a challenge</Button>
          <UserAvatar className="ml-30">
            <img src="/assets/images/hero-1.png" alt="" />
          </UserAvatar>
        </div>
      </TopNavContainer>
    </TopNav>
  );
};

export default DashboardTemplate;
