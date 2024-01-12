import React from "react";
import { LandscapeWrapper } from "./style";
import { InstaChallengeIcon } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const ChallengeCardLandscape: React.FC<Props> = () => {
  // Data to display
  return (
    <LandscapeWrapper>
      <div className="lndscp__left">
        <img src="/assets/images/dash-challenge-1.png" alt="" />
      </div>
      <div className="lndscp__bottom">
        <InstaChallengeIcon />
        <div>
          <Typography
            as="h5"
            className="h-29 max-width-220"
            text="Marvin’s Record “Believe me..."
          />
          <Typography as="p" className="h-26" text="₦ 50,000.80" />
        </div>
      </div>
    </LandscapeWrapper>
  );
};

export default ChallengeCardLandscape;
