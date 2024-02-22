import React from "react";
import { PageStyle } from "./style";
import {
  CreativeChallengeIcon,
  DuetChallengeIcon,
  SoundChallengeIcon,
  StitchChallengeIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";
import { SocialRadio, TypeRadio } from "Components/Molecules/Input";

// Type defination
interface Props {}

// Component
const ManageSocials: React.FC<Props> = () => {
  // State
  // const [active, setActive] = useState(0);

  // Data to display
  return (
    <PageStyle
      initial={{ x: 5, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 5, opacity: 0 }}
      transition={{ duration: 0.4, ease: "linear" }}
    >
      <Typography as="h3" className="" text="Mange Socials" />

      <Typography
        as="h6"
        className="h-33 mt-40 mb-20"
        text="Connected socials"
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
          label="just_er"
          name="socil-ff"
        />
        <TypeRadio
          icon={<CreativeChallengeIcon />}
          label="just_er "
          name="socil-ff"
        />
        <TypeRadio
          icon={<DuetChallengeIcon />}
          label="Justice Osagie"
          labelClassName="label-icon"
          name="socil-ff"
        />
        <TypeRadio
          icon={<StitchChallengeIcon />}
          label="just_er  "
          labelClassName="label-icon"
          name="socil-ff"
        />
      </Flex>
    </PageStyle>
  );
};

export default ManageSocials;
