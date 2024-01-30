import React, { useState } from "react";
import {
  Body,
  BodyContainer,
  Left,
  Right,
  Toggler,
  TogglerList,
  TopNav,
  TopNavContainer,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
import {
  AddCircleIcon,
  BackArrowIcon,
  CardIcon,
  DocumentTextIcon,
  TimerStartIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import SetUpChallengePage from "./SetUpChallengePage";

// Variable
const tabTogglers = [
  { icon: <AddCircleIcon />, label: "Setup Challenge" },
  { icon: <DocumentTextIcon />, label: "Provide Details" },
  { icon: <CardIcon />, label: "Set Payment" },
  { icon: <TimerStartIcon />, label: "Start Over" },
];

// Type defination
interface Props {}

// Component
const SetUpChallenge: React.FC<Props> = () => {
  // State
  const [active, setActive] = useState(0);

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

            <TogglerList>
              {tabTogglers.map((tab, index) => (
                <Toggler
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  {tab.icon}
                  <Typography as="p" className="p-22" text={tab.label} />
                </Toggler>
              ))}
            </TogglerList>
          </Left>
          <Right>
            <SetUpChallengePage />
          </Right>
        </BodyContainer>
      </Body>
    </Wrapper>
  );
};

export default SetUpChallenge;
