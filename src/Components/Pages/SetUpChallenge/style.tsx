import {
  FlexColumn,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetween,
  FlexRowJcBetweenAiCenter,
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

  .next-cta {
    ${FlexRowAiCenter}
    gap: 1rem;
    border-radius: 2.5rem;

    font-family: Poppins;
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--color-22);
    padding: 0.8rem 2.5rem;

    &.prev {
      border: 1px solid var(--color-34);
    }
    &.next {
      background-color: var(--color-27);

      svg {
        transform: rotate(180deg);
      }
    }
  }
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

export const ProvideDetailsFormWrapper = styled.section`
  max-width: 60rem;

  .options {
    ${FlexRowAiCenter};

    & > * {
      flex-basis: 30%;
    }
  }
`;

export const PreviewChallengeBox = styled.div`
  border: 1px solid var(--color-28);
  padding-bottom: 1.5rem;
  border-radius: 1rem;
  padding: 2rem;

  .placeholder-wrapper {
    ${FlexRow}
    gap: 1rem;
  }
  .placeholder {
    font-family: Poppins;
    font-size: 1.2rem;
    font-weight: 300;
    /* line-height: 140%; */
    color: var(--color-22);
  }

  .preview-cta {
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    border: 1px solid var(--color-33);
    font-family: Poppins;
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--color-22);
  }
`;

export const SetPaymentWrapper = styled.section`
  max-width: 40rem;

  .checkbox-label {
    font-family: Poppins;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-22);

    &--dark {
      color: #1e1e1e;
    }
  }
`;

export const TotalPay = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
  background-color: var(--color-27);
  padding: 1.5rem;
  border-radius: 1.2rem;
`;
