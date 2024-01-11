import React from "react";
import { TabLikeNav } from "Components/Molecules/TabLikeNav";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import {
  Ad,
  Challenges,
  CreatorPopup,
  EarningsTab,
  PopUp,
  SectionHead,
  UserEarningCard,
  UserEarningCardWrapper,
} from "./style";
import {
  InstaChallengeIcon,
  InstagramTabIcon,
  TiktokChallengeIcon,
  TiktokTabIcon,
  TwitterTabIcon,
  WalletIcon,
  YoutubeTabIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { ChallengeCard } from "Components/Molecules/ChallengeCard";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const Dashboard: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <EarningsTab>
        <TabLikeNav tabs={["Current Earnings", " All Time"]} />
        <TabLikeNav
          tabs={[
            "All",
            <TiktokTabIcon />,
            <InstagramTabIcon />,
            <YoutubeTabIcon />,
            <TwitterTabIcon />,
          ]}
          gap="small"
        />
      </EarningsTab>

      <UserEarningCardWrapper>
        <div>
          <Typography
            as="h4"
            className="h-23 max-width-220 mb-30"
            text="Osagie’s Current Earning"
          />

          <Link to="#" className="l-4">
            See all payment
          </Link>
        </div>

        <div className="cards">
          <UserEarningCard>
            <WalletIcon />
            <div>
              <Typography as="p" className="p-19" text="Reached" />
              <Typography as="h4" className="h-23 mt-10" text="₦ 250,000.80" />
            </div>
          </UserEarningCard>
          <UserEarningCard>
            <WalletIcon />
            <div>
              <Typography as="p" className="p-19" text="Available" />
              <Typography as="h4" className="h-23 mt-10" text="₦ 50,000.80" />
            </div>
          </UserEarningCard>
        </div>
      </UserEarningCardWrapper>

      <Ad>
        <img src="/assets/images/ad-img.png" alt="" />
      </Ad>

      <Challenges>
        <Typography as="h4" className="h-24 mb-25" text="Open Challenges" />

        <ChallengeCard />
      </Challenges>

      <CreatorPopup>
        <SectionHead className="mb-40">
          <div>
            <Typography as="h4" className="h-24" text="Creator Pop-Ups" />
            <Typography
              as="p"
              className="p-20"
              text="Check out our most active creators in the last month"
            />
          </div>

          <Button className="btn-6">View all</Button>
        </SectionHead>

        <PopUp>
          <div className="avatar">
            <img src="/assets/images/phone-1.png" alt="" />
          </div>
          <div className="username-n-follows">
            <Typography as="h4" className="h-27" text="@habbeb_243" />
            <div className="follows">
              <InstaChallengeIcon width={16} height={16} />
              <Typography as="p" className="p-21" text="9.2k" />
              <TiktokChallengeIcon width={16} height={16} />
              <Typography as="p" className="p-21" text="9.2k" />
            </div>
          </div>
        </PopUp>
      </CreatorPopup>

      <Challenges>
        <Typography as="h4" className="h-24" text="Best of Challenges" />
        <Typography
          as="p"
          className="p-20 mb-25"
          text="Check out our most active creators in the last month"
        />
        <ChallengeCard />
      </Challenges>
    </DashboardTemplate>
  );
};

export default Dashboard;
