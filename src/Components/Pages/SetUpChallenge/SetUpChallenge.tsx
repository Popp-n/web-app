import React from "react";
import {
  Body,
  BodyContainer,
  Left,
  Right,
  TopNav,
  TopNavContainer,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
import { BackArrowIcon } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const SetUpChallenge: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <TopNav>
        <TopNavContainer>
          <Link to="/dashboard" className="l l-5">
            <BackArrowIcon />
            Goto dashboard
          </Link>
        </TopNavContainer>
      </TopNav>

      <Body>
        <BodyContainer>
          <Left>
            <Typography
              as="h5"
              className="h-31 mb-20"
              text="Create a challenge"
            />
          </Left>
          <Right></Right>
        </BodyContainer>
      </Body>
    </Wrapper>
  );
};

export default SetUpChallenge;
