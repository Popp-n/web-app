import React from "react";
// import { Wrapper } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import { Header } from "./style";

// Type defination
interface Props {}

// Component
const Creators: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
      <Header></Header>
    </>
  );
};

export default Creators;
