import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexRowJcCenterAiCenter } from "Styles/Abstract/Mixins";

export const OverlayStyle = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 10;
  overflow-y: auto;
  padding-bottom: 5rem;

  ${FlexRowJcCenterAiCenter}

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @supports (backdrop-filter: blur(0.5rem)) {
    backdrop-filter: blur(0.4rem);
  }
`;
