import { FlexRowJcEndAiCenter } from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  border-radius: 1.2rem;
  background: var(--color-white);
  padding: 2rem;
  flex-basis: 41rem;

  .top {
    ${FlexRowJcEndAiCenter}
  }
`;
