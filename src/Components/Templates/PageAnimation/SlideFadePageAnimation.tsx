import React from "react";
import { Wrapper } from "./style";
import { animateFade } from "Styles/Base/Animation";

interface PageAnimationProps {
  children?: any;
  pageKey?: string;
}
const SlideFadePageAnimation: React.FC<PageAnimationProps> = ({
  children,
  pageKey,
}) => {
  return (
    <Wrapper
      key={`${pageKey}_page`}
      variants={animateFade.variants}
      transition={animateFade.transition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </Wrapper>
  );
};

export default SlideFadePageAnimation;
