import React from "react";
import { PageStyle, TargetLevelBox } from "./style";
import Typography from "Components/Atoms/Typography";
import {
  FormInputGrid,
  Input,
  Select,
  SocialRadio,
  TypeRadio,
} from "Components/Molecules/Input";
import { Flex } from "Styles/layouts/Flex";
import {
  LongArrowIcon,
  CreativeChallengeIcon,
  DuetChallengeIcon,
  SoundChallengeIcon,
  StitchChallengeIcon,
} from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const ProvideDetailsPage: React.FC<Props> = () => {
  // Data to display
  return (
    <PageStyle>
      <Typography as="p" className="p-23 mt-5 max-width-400">
        <>
          Challenges with simpler requirements receive the highest participation
          rates! <span className="p-23--heavy"> Learn more</span>
        </>
      </Typography>
    </PageStyle>
  );
};

export default ProvideDetailsPage;
