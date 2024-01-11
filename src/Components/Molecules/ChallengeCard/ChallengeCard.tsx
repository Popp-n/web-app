import React from "react";
import { Wrapper } from "./style";
import { InstaChallengeIcon } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const ChallengeCard: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <div className="top">
        <img src="/assets/images/dash-challenge-1.png" alt="" />
      </div>
      <div className="bottom">
        <InstaChallengeIcon />
        <div>
          <Typography
            as="h5"
            className="h-25"
            text="Marvin’s Record “Believe me..."
          />
          <Typography as="p" className="h-26" text="₦ 50,000.80" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChallengeCard;
