import React from "react";
import { PageStyle } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const ProvideDetailsPage: React.FC<Props> = () => {
  // Data to display
  return (
    <PageStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
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
