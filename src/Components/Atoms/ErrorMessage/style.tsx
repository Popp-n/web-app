import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.span)`
  color: var(--color-30);
  font-family: Poppins;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;

  ${FlexRowAiCenter};
  gap: 1rem;

  border-radius: 0 0 0.4rem 0.4rem;
  border: 0 solid var(--color-31);
  background-color: var(--color-18);
  padding: 0.8rem 1.6rem;

  &.outer {
    border-radius: 0.4rem;
    margin-bottom: 1rem;
  }
`;
