import {
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.main``;
export const TopNav = styled.nav`
  padding-block: 3rem;
`;
export const TopNavContainer = styled(Center)``;

export const Body = styled.section``;

// Set up challenge page

export const PageStyle = styled(motion.section)`
  padding-bottom: 10rem;
`;

export const UserEarningCardWrapper = styled.div`
  border-radius: 1.6rem;
  background: var(--color-23);
  padding: 2rem;
  margin-top: 3rem;

  ${FlexRowJcBetweenAiCenter};
  gap: 6rem;

  .cards {
    ${FlexRow};
    gap: 2.5rem;
  }

  .withdraw-btn {
    ${FlexRowAiCenter}
    gap: .5rem;
    color: var(--color-primary);

    svg {
      transform: rotate(180deg);
      path {
        fill: var(--color-primary);
      }
    }
  }
`;

export const UserEarningCard = styled.div`
  border-radius: 1rem;
  background: var(--color-white);
  ${FlexRowAiCenter}
  gap: 1.5rem;
  padding: 2.4rem 2rem;
`;
