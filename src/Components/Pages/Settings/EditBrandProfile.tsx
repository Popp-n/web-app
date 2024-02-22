import React from "react";
import { PageStyle } from "./style";

import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const EditBrandProfile: React.FC<Props> = () => {
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
      <Typography as="h3" className="" text="Brand Profile" />
    </PageStyle>
  );
};

export default EditBrandProfile;
