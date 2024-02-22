import React from "react";

import {
  Container,
  ImageContainer,
  PageLayout,
  PageSection,
  Socials,
  TopSection,
  UserNameContainer,
} from "./style";
import { DashboardTopNav } from "Components/Molecules/TopNav";

import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";
import { Button } from "Components/Atoms/Button";
import {
  InstaChallengeIcon,
  ProfileUserIcon,
  TiktokChallengeIcon,
  TwitterChallengeIcon,
} from "Components/Atoms/SvgIcons";
import { ChallengeCard } from "Components/Molecules/ChallengeCard";

// Type defination
interface Props {}

// Component
const AdminDashboard: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <DashboardTopNav />
      <TopSection>
        <Container></Container>
      </TopSection>

      <PageSection>
        <Container>
          <PageLayout>
            <div className="page-layout__left">
              <ImageContainer>
                <img src="/assets/images/admin-avatar.png" alt="" />
              </ImageContainer>

              <Socials className="mt-70">
                <Flex $gap="1rem" $flexRowAiCenter>
                  <InstaChallengeIcon width={29} height={30} />
                  <Typography as="p" className="p-9" text="9.2k" />
                  <ProfileUserIcon width={19} height={20} />
                </Flex>
                <Flex $gap="1rem" $flexRowAiCenter>
                  <TiktokChallengeIcon width={29} height={30} />
                  <Typography as="p" className="p-9" text="9.2k" />
                  <ProfileUserIcon width={19} height={18} />
                </Flex>
                <Flex $gap="1rem" $flexRowAiCenter>
                  <TwitterChallengeIcon width={29} height={30} />
                  <Typography as="p" className="p-9" text="9.2k" />
                  <ProfileUserIcon width={19} height={18} />
                </Flex>
              </Socials>
            </div>
            <div className="page-layout__right">
              <UserNameContainer>
                <div>
                  <Typography as="h2" className="h-23" text="@Osagie Omon" />
                  <Typography
                    as="p"
                    className="p-20"
                    text="justcjae | Nigeria"
                  />
                </div>

                <Button className="btn btn-4 btn-sm b-5 mt-20">
                  Edit Profile
                </Button>
              </UserNameContainer>

              <Typography as="h2" className="h-21 mt-100" text="About" />
              <Typography
                as="p"
                className="p-23"
                text="Click the edit profile button to add information about yourself"
              />

              <Typography
                as="h2"
                className="h-21 mt-80"
                text="Challenges Participated"
              />
              <ChallengeCard />
            </div>
          </PageLayout>
        </Container>
      </PageSection>
    </>
  );
};

export default AdminDashboard;
