import {
  FlexColumn,
  FlexRowAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  background-color: var(--color-white);
  max-width: 27.7rem;

  .top {
    max-height: 25.1532rem;
    border-radius: 2.1rem;
    overflow: hidden;

    img {
      border-radius: 2.1rem;
      ${ImageDefault}
    }
  }
  .bottom {
    ${FlexRowAiCenter}
    gap: .8rem;
    margin-top: 1.7rem;
  }
`;
export const LandscapeWrapper = styled.div`
  padding: 1rem;
  background-color: var(--color-white);
  ${FlexRowAiCenter}
  gap: 1.6rem;

  .lndscp__left {
    width: 138px;
    height: 135.064px;
    border-radius: 1.2rem;
    overflow: hidden;

    img {
      border-radius: 1.2rem;
      ${ImageDefault}
    }
  }
  .lndscp__bottom {
    ${FlexColumn}
    gap: .8rem;
  }
`;
