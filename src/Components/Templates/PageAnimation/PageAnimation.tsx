import React from "react";
import { Wrapper } from "./style";
import { animateFadeSmall } from "Styles/Base/Animation";

interface PageAnimationProps {
  children?: any;
  pageKey?: string;
}
const PageAnimation: React.FC<PageAnimationProps> = ({ children, pageKey }) => {
  return (
    <Wrapper
      key={`${pageKey}_page`}
      variants={animateFadeSmall.variants}
      transition={animateFadeSmall.transition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Wrapper>
  );
};

export default PageAnimation;
