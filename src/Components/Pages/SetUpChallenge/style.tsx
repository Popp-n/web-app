import {
  FlexColumn,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetween,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, Centerdashboard } from "Styles/layouts/Center";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.main``;
export const TopNav = styled.nav`
  padding-block: 3rem;
`;
export const TopNavContainer = styled(Center)``;

export const Body = styled.section``;

export const BodyContainer = styled(Centerdashboard)`
  ${FlexRow}
  gap: 2.5rem;
  padding-top: 5rem;
`;

export const Left = styled.aside`
  position: sticky;
  top: 9rem;
  flex-shrink: 0;
`;
export const Right = styled.section`
  flex-grow: 1;
`;

export const TogglerList = styled.div`
  ${FlexColumn}
  gap: .5rem;
`;

export const Toggler = styled.button`
  all: unset;
  cursor: pointer;
  ${FlexRowAiCenter}
  gap: 1.2rem;
  padding: 1.2rem 4rem 1.2rem 1.5rem;
  border-radius: 0.8rem;
  transition: 0.4s;

  &.active,
  &:hover {
    background-color: var(--color-25);

    path {
      /* fill: var(--color-26); */
    }
  }
`;

// Set up challenge page

export const PageStyle = styled(motion.section)`
  padding-bottom: 10rem;
`;

export const SetUpChallengePageStyle = styled.section``;
export const Banner = styled.div`
  max-height: 25rem;
  border-radius: 9.2rem;

  img {
    ${ImageDefault}
  }
`;

export const InputWrapper = styled.div`
  max-width: 37rem;
`;

export const TargetLevelBox = styled.div`
  max-width: 25rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-28);
  padding: 1.5rem;
  ${FlexRowJcBetween}
`;

export const BudgetRangeWrapper = styled.div`
  max-width: 35rem;
  ${FlexRowJcBetween}
`;

// Provide details page
export const ProvideDetailsPageStyle = styled.section``;
