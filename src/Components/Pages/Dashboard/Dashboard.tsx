import React from "react";
import { TabLikeNav } from "Components/Molecules/TabLikeNav";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { EarningsTab, UserEarningCard, UserEarningCardWrapper } from "./style";
import {
  InstagramTabIcon,
  TiktokTabIcon,
  TwitterTabIcon,
  WalletIcon,
  YoutubeTabIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";

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
    </DashboardTemplate>
  );
};

export default Dashboard;
