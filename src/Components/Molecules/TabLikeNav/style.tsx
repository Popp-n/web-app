import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${FlexRowAiCenter}
  gap: 4rem;

  &.small-gap {
    gap: 2.5rem;
  }

  .tab {
    color: var(--color-22);
    font-size: 1.2rem;
    font-weight: 500;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      bottom: -50%;
      width: 100%;
      height: 0;
      background-color: var(--color-1);
      transition: 0.4s;
    }

    &.active {
      &::after {
        height: 0.2rem;
      }
    }
  }
`;
