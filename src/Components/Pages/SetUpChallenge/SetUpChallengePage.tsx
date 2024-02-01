import React from "react";
import {
  Banner,
  BudgetRangeWrapper,
  InputWrapper,
  PageStyle,
  TargetLevelBox,
} from "./style";
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
const SetUpChallengePage: React.FC<Props> = () => {
  // Data to display
  return (
    <PageStyle>
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
      <Flex $gap="1rem" $flexRow>
        <TypeRadio label="Yes" name="creator-segment" />
        <TypeRadio label="No" name="creator-segment" />
      </Flex>

      <TargetLevelBox className="mt-30 mb-30">
        <div>
          <Typography as="h6" className="h-34" text="Target Level" />
          <Typography as="p" className="p-24 mt-5" text="None" />
        </div>
        <div>
          <Typography as="h6" className="h-34" text="Estimated  CPM" />
          <Typography as="p" className="p-24 mt-5" text="N50,000" />
        </div>
      </TargetLevelBox>

      <Typography as="h6" className="h-33 mt-40 mb-20 text-underline">
        Understand how your CPM is calculated
      </Typography>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Gender
      </Typography>
      <Flex $gap="1rem" $flexRow>
        <TypeRadio label="Both" name="gender" />
        <TypeRadio label="Male" name="gender" />
        <TypeRadio label="Female" name="gender" />
      </Flex>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Location
      </Typography>
      <Flex $gap="1rem" $flexRow>
        <TypeRadio label="Africa" name="location" />
        <TypeRadio label="Nigeria" name="location" />
        <TypeRadio label="Kenya" name="location" />
      </Flex>

      <Typography as="h6" className="h-33 mt-40 mb-20" text="Content Type" />
      <InputWrapper>
        <Select placeholder="Any" className="style-2" />
      </InputWrapper>

      <InputWrapper>
        <FormInputGrid>
          <div>
            <Typography as="h6" className="h-33 mb-10" text="Min Age" />
            <InputWrapper>
              <Select placeholder="Any" className="style-2" />
            </InputWrapper>
          </div>
          <div>
            <Typography as="h6" className="h-33 mb-10" text="Max Age" />
            <InputWrapper>
              <Select placeholder="Any" className="style-2" />
            </InputWrapper>
          </div>
        </FormInputGrid>
      </InputWrapper>

      <Typography as="h3" className="h-32 mt-30" text="Set Budget" />
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
      <Flex $gap="1rem" $flexRow>
        <TypeRadio label="NGN 50,0000" name="budgety" />
        <TypeRadio label="NGN 60,0000" name="budgety" />
        <TypeRadio label="NGN 70,0000" name="budgety" />
        <TypeRadio label="NGN 80,0000" name="budgety" />
      </Flex>

      <BudgetRangeWrapper className="mt-45">
        <div>
          <Typography as="h6" className="h-35" text="Estimated CRM" />
          <Typography as="p" className="h-36 mt-5" text="10,000" />
        </div>
        <div>
          <Typography
            as="h6"
            className="h-35"
            text="Projected number of views"
          />
          <Typography as="p" className="h-36 mt-5" text="800K" />
        </div>
      </BudgetRangeWrapper>

      <Button className="btn btn-4 btn-md b-7 mt-70">
        Provide Details <LongArrowIcon />
      </Button>
    </PageStyle>
  );
};

export default SetUpChallengePage;
