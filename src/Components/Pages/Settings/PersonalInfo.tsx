import React from "react";
import { PageStyle, UserEarningCard, UserEarningCardWrapper } from "./style";
import { BtnIcon, WalletIcon } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { TabLikeNav } from "Components/Molecules/TabLikeNav";

// Type defination
interface Props {}

// Component
const PersonalInfo: React.FC<Props> = () => {
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
      <Typography as="h3" className="" text="My Earnings" />
      <UserEarningCardWrapper>
        <UserEarningCard>
          <WalletIcon />
          <div>
            <Typography as="p" className="p-19" text="Total Payout" />
            <Typography as="h4" className="h-23 mt-10" text="₦ 250,000.80" />
          </div>
        </UserEarningCard>

        <Button className="withdraw-btn">
          Withdraw Money <BtnIcon />
        </Button>
      </UserEarningCardWrapper>

      <UserEarningCardWrapper>
        <UserEarningCard>
          <WalletIcon />
          <div>
            <Typography as="p" className="p-19" text="Pending Earnings" />
            <Typography as="h4" className="h-23 mt-10" text="₦ 250,000.80" />
          </div>
        </UserEarningCard>
      </UserEarningCardWrapper>

      <Typography as="h3" className="mt-70 mb-15" text="Transaction" />
      <TabLikeNav tabs={["Challenges", "Referral", "Other"]} />

      <Typography as="h4" className="h-49 mt-50">
        You don’t have any completed transactions
      </Typography>
      <Typography as="p" className="p-30 mt-5">
        Participate in challenge to start earning. Get started today!
      </Typography>
    </PageStyle>
  );
};

export default PersonalInfo;
