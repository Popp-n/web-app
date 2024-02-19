import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { CenterPlayground } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  padding-block: 8rem;
  ${responsive("sm", `padding-top: 1rem;`)}
`;
export const Container = styled(CenterPlayground)`
  ${FlexRowAiCenter}
  gap: 12rem;

  ${responsive("sm", `${FlexColumnJcCenterAiCenter}; gap: 5rem;`)}
`;

export const Left = styled.div`
  .content {
    ${FlexRow};
    gap: 1rem;
    &:not(:first-child) {
      margin-top: 6.5rem;
      ${responsive("sm", `margin-top: 3.5rem`)}
    }
  }
`;

export const Right = styled.div`
  position: relative;
  .gif-container {
    max-width: 306.75px;
    max-height: 545.333px;

    img {
      ${ImageDefault}
    }
  }

  .socials {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 116px;
    height: 26.44px;

    img {
      ${ImageDefault}
    }
  }
`;
