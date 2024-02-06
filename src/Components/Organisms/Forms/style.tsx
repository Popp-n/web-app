import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FlexColumn,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcEndAiCenter,
} from "Styles/Abstract/Mixins";

export const FormInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  &:not(:last-child) {
    /* margin-bottom: 1.6rem; */
  }
`;

export const Actions = styled.div`
  ${FlexRowJcEndAiCenter}
  gap: 1rem;
`;

export const DayTimeStyle = styled.div`
  border-radius: 0.8rem;
  border: 1px solid var(--color-69);
  background: var(--color-white);
  padding: 2rem 2.5rem;
  ${FlexColumn}
  gap: 3rem;
  margin-bottom: 2rem;
`;

export const DayTimeTop = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
`;

export const DayTimeBottom = styled(motion.div)`
  ${FlexRowAiCenter}
  gap: 2rem;
`;
