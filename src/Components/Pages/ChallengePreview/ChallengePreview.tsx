import React from "react";

import {
  Container,
  ImageContainer,
  InputBox,
  ListBox,
  PageLayout,
  PageSection,
  Platform,
  TopSection,
  UserEarningCard,
  UserEarningCardWrapper,
} from "./style";
import { DashboardTopNav } from "Components/Molecules/TopNav";
import { Link } from "react-router-dom";
import {
  BackArrowIcon,
  TiktokNewIcon,
  USerNewIcon,
  WalletIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";
import { Input } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const ChallengePreview: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <DashboardTopNav />
      <TopSection>
        <Container>
          <Link to="/dashboard" className="l l-5">
            <BackArrowIcon />
            Go to create challenge
          </Link>
        </Container>
      </TopSection>

      <PageSection>
        <Container>
          <PageLayout>
            <div>
              <ImageContainer>
                <img src="/assets/images/collabo-power-1-mobile.png" alt="" />
              </ImageContainer>
            </div>
            <div className="page-layout__right">
              <Typography
                as="h4"
                className="h-42 max-width-330 mt-10"
                text="Skin Care"
              />
              <Typography
                as="h4"
                className="h-42 max-width-330"
                text="Product Challenge"
              />
              <Flex className="mt-15" $gap="1rem" $flexRow>
                <Platform>
                  <TiktokNewIcon width={17} height={19} />
                  <Typography as="p" className="p-27" text="Tiktok" />
                </Platform>
                <Platform>
                  <USerNewIcon width={19} height={18} />
                  <Typography as="p" className="p-27" text="Duet" />
                </Platform>
              </Flex>
              <Flex className="mt-15" $gap="1rem" $flexRowAiCenter>
                <Typography as="h4" className="h-42" text="₦250" />
                <div>
                  <Typography as="h6" className="h-43" text="Max Payout" />
                  <Typography as="p" className="p-26" text="Earn Per view" />
                </div>
              </Flex>

              <UserEarningCardWrapper>
                <UserEarningCard>
                  <WalletIcon />
                  <div>
                    <Typography
                      as="p"
                      className="p-19"
                      text="Your current Payout"
                    />
                    <Typography as="h4" className="h-23 mt-10" text="₦ 0.00" />
                  </div>
                </UserEarningCard>

                <Flex $gap="1rem" $flexRowAiCenter>
                  <div>
                    <Typography as="h5" className="h-44" text="Budget Used" />
                    <Typography
                      as="p"
                      className="p-28 mt-3 max-width-170"
                      text="Challenge will be closed at 100%  used"
                    />
                  </div>
                  <Typography as="h2" className="h-45" text="44%" />
                </Flex>
              </UserEarningCardWrapper>
            </div>
          </PageLayout>

          <PageLayout className="mt-100">
            <div className="page-layout__left">
              <ImageContainer>
                <img src="/assets/images/preview-challenge.png" alt="" />
              </ImageContainer>
            </div>
            <div className="page-layout__right">
              <Typography
                as="h4"
                className="h-46 max-width-330 mt-10"
                text="Challenge Details"
              />
              <Typography
                as="h4"
                className="h-47 max-width-330 mt-40"
                text="Brand Intro"
              />
              <Typography as="p" className="p-29 mt-5">
                Are you a skincare enthusiast with a flair for radiant beauty?
                Join our Glow & Shine Challenge and let your creativity shine
                through! Here are the dos and don'ts, along with our submission
                rules:
              </Typography>

              <Typography
                as="h4"
                className="h-48 max-width-330 mt-30 mb-5"
                text="Do's"
              />
              <ListBox>
                <ul className="challenge-list">
                  <li className="p-29 mb-5">
                    Natural Radiance: Embrace your skin's natural beauty. We
                    encourage you to showcase how our skincare products enhance
                    your glow.
                  </li>
                  <li className="p-29 mb-5">
                    Educate and Inspire: Share skincare tips, routines, and
                    stories that educate and inspire. Your content should
                    empower others to care for their skin.
                  </li>
                  <li className="p-29 mb-5">
                    Quality Visuals: Ensure your content is visually appealing.
                    High-quality images and videos that highlight your radiant
                    skin are a plus.
                  </li>
                  <li className="p-29">
                    Engage with Our Brand: Understand our skincare values and
                    how our products contribute to skin health. Incorporate our
                    products into your routine genuinely.
                  </li>
                </ul>
              </ListBox>

              <Typography
                as="h4"
                className="h-48 max-width-330 mt-30 mb-5"
                text="Don'ts:"
              />
              <ListBox>
                <ul className="challenge-list">
                  <li className="p-29 mb-5">
                    No False Claims: Avoid making exaggerated or false claims
                    about our products. Keep your content truthful and
                    informative.
                  </li>
                  <li className="p-29 mb-5">
                    Avoid Harmful Practices: Do not promote harmful skincare
                    practices or products. Our challenge is about healthy,
                    glowing skin.
                  </li>
                  <li className="p-29 mb-5">
                    No Offensive Content: Refrain from using offensive or
                    disrespectful language, imagery, or content. Keep it
                    positive and respectful.
                  </li>
                  <li className="p-29">
                    No Spamming: Submit your content only once. Multiple
                    submissions will be disqualified.
                  </li>
                </ul>
              </ListBox>

              <Typography
                as="h4"
                className="h-48 max-width-330 mt-30 mb-5"
                text="Submission Rules:"
              />
              <ListBox>
                <ul className="challenge-list">
                  <li className="p-29 mb-5">
                    Deadline: All submissions must be received by [Insert
                    Deadline] to be considered.
                  </li>
                  <li className="p-29 mb-5">
                    Content Format: We accept photos and videos. Ensure your
                    submission is in a format compatible with our platform.
                  </li>
                  <li className="p-29 mb-5">
                    Submission Method: Share your content on [Platform/Link],
                    using the hashtag #GlowAndShineChallenge. Make sure your
                    submission is public so that we can see it.
                  </li>
                  <li className="p-29 mb-5">
                    Ownership: By submitting your content, you grant us the
                    right to use it for promotional purposes related to this
                    contest.
                  </li>
                  <li className="p-29 mb-5">
                    Eligibility: This contest is open to skincare enthusiasts of
                    all ages. Participants must adhere to all applicable laws
                    and regulations.
                  </li>
                  <li className="p-29 mb-5">
                    Prizes: The top three submissions will win [Prize Details].
                    Winners will be announced on [Announcement Date].ts must
                    adhere to all applicable laws and regulations.
                  </li>
                </ul>

                <Typography as="p" className="p-29 mt-10">
                  Join us in celebrating radiant skin! Show us your skincare
                  journey, and let's glow and shine together. Good luck! 🌟
                  #GlowAndShineChallenge
                </Typography>

                <InputBox>
                  <Typography
                    as="h6"
                    className="h-33 mt-50 mb-5"
                    text="Submit Link"
                  />
                  <Input
                    placeholder="ex; Product Name Challenge"
                    className="style-2"
                  />

                  <Button className="btn btn-4 btn-sm b-1 mt-20">Submit</Button>
                </InputBox>
              </ListBox>
            </div>
          </PageLayout>
        </Container>
      </PageSection>
    </>
  );
};

export default ChallengePreview;
