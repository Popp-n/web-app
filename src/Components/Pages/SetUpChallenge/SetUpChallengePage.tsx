import React from "react";
import { Banner, InputWrapper, SetUpChallengePageStyle } from "./style";
import Typography from "Components/Atoms/Typography";
import { Input, SocialRadio, TypeRadio } from "Components/Molecules/Input";
import { Flex } from "Styles/layouts/Flex";
import {
  CreativeChallengeIcon,
  DuetChallengeIcon,
  SoundChallengeIcon,
  StitchChallengeIcon,
} from "Components/Atoms/SvgIcons";

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
        <SocialRadio social="Tiktok" label="Tiktok" name="socil-platform" />
        <SocialRadio
          social="Instagram"
          label="Instagram"
          name="socil-platform"
        />
        <SocialRadio social="Youtube" label="Youtube" name="socil-platform" />
        <SocialRadio social="Twitter" label="Twitter" name="socil-platform" />
      </Flex>

      <Typography as="h6" className="h-33 mt-40 mb-20" text="Select Type" />
      <Flex $gap="1rem" $flexRow>
        <TypeRadio
          icon={<SoundChallengeIcon />}
          label="Sound"
          name="socil-ff"
        />
        <TypeRadio
          icon={<CreativeChallengeIcon />}
          label="Creative"
          name="socil-ff"
        />
        <TypeRadio
          icon={<DuetChallengeIcon />}
          label="Duet"
          labelClassName="label-icon"
          name="socil-ff"
        />
        <TypeRadio
          icon={<StitchChallengeIcon />}
          label="Stitch"
          labelClassName="label-icon"
          name="socil-ff"
        />
      </Flex>

      <Typography as="h6" className="h-33 mt-40 mb-20" text="Link to content" />
      <InputWrapper>
        <Input placeholder="Brand or Organisation Name" className="style-2" />
      </InputWrapper>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Do you want to target specific segments of creators?
      </Typography>

      <Typography as="h3" className="h-32 mt-70" text="Set Budget" />
      <Typography as="p" className="p-23 mt-5 max-width-481">
        <>
          Choosee what you want to spend on your challenge! The larger the
          budget, the more appealing your challenge will be to our creators!{" "}
          <span className="p-23--heavy"> How show I decide on a budget?</span>
        </>
      </Typography>

      <Typography as="h6" className="h-33 mt-40 mb-20" text="Budget" />
      <InputWrapper>
        <Input placeholder="100,0000" className="style-2" />
      </InputWrapper>
    </SetUpChallengePageStyle>
  );
};

export default SetUpChallengePage;
