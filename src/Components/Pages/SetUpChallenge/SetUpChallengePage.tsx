import React from "react";
import { Banner, SetUpChallengePageStyle } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const SetUpChallengePage: React.FC<Props> = () => {
  // Data to display
  return (
    <SetUpChallengePageStyle>
      <Banner>
        <img src="/assets/images/ad-img.png" alt="" />
      </Banner>

      <Typography as="h3" className="h-32 mt-70" text="Select Challenge Type" />
      <Typography as="p" className="p-23 mt-5 max-width-570">
        <>
          Select the social platform and content type you want to require for
          your challenge.{" "}
          <span className="p-23--heavy"> Which one is right for you?</span>
        </>
      </Typography>
      <Typography
        as="h6"
        className="h-33 mt-40"
        text="Select Social Platform"
      />
    </SetUpChallengePageStyle>
  );
};

export default SetUpChallengePage;
