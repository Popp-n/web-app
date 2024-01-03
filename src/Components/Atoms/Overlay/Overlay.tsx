import React from "react";
import { OverlayStyle } from "./style";
import { OverlayProps } from "./types";

const Overlay: React.FC<OverlayProps> = (props) => {
  const { children } = props;
  return (
    <OverlayStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </OverlayStyle>
  );
};

export default Overlay;
