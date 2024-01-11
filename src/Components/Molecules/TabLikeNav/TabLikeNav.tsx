import React, { useState } from "react";
import { Wrapper } from "./style";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {
  tabs?: Array<string | JSX.Element>;
  gap?: "small";
}

// Component
const TabLikeNav: React.FC<Props> = ({ tabs, gap }) => {
  // States
  const [activeTab, setActiveTab] = useState(0);

  // Data to display
  return (
    <Wrapper className={`${gap ? "small-gap" : ""}`}>
      {tabs?.map((tab, idx) => (
        <Button
          onClick={() => setActiveTab(idx)}
          className={`tab ${activeTab === idx ? "active" : ""}`}
        >
          {tab}
        </Button>
      ))}
    </Wrapper>
  );
};

export default TabLikeNav;
