import React from "react";
import { Banner, SetUpChallengePageStyle } from "./style";
import Typography from "Components/Atoms/Typography";
import { SocialRadio } from "Components/Molecules/Input";
import { Flex } from "Styles/layouts/Flex";

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
        className="h-33 mt-40 mb-20"
        text="Select Social Platform"
      />

      <Flex $gap="1rem" $flexRow>
        <SocialRadio social="Tiktok" label="Tiktok" name="socil-type" />
        <SocialRadio social="Instagram" label="Instagram" name="socil-type" />
        <SocialRadio social="Youtube" label="Youtube" name="socil-type" />
        <SocialRadio social="Twitter" label="Twitter" name="socil-type" />
      </Flex>

      <Typography as="h6" className="h-33 mt-40 mb-20" text="Select Type" />
    </SetUpChallengePageStyle>
  );
};

export default SetUpChallengePage;
