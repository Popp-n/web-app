import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumn,
  FlexColumnJcCenterAiCenter,
  FlexRowJcBetweenAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-block: 7rem;
`;

export const Container = styled(Center)`
  border-radius: 2.56rem;
  background-color: var(--color-6);
  padding-inline: 8rem;
  padding-right: 0;
  ${FlexRowJcBetweenAiCenter}
  gap: 5rem;

  .brand-section__left {
    ${responsive("sm", `${FlexColumnJcCenterAiCenter}; text-align: center; padding-right: 4rem;`)}
    ${responsive("xsm", `padding-right: 2rem;`)}
  }

  .right-image-container {
    position: relative;
    max-height: 45.9rem;
    max-width: 48.5rem;

    .img {
      ${ImageDefault}
    }

    .shadow {
      position: absolute;
      width: 35.4rem;
      height: 36.7rem;
      right: 0;
    }
  }

  ${responsive("sm", `${FlexColumn}; padding-top: 7rem; padding-left: 4rem;`)}
  ${responsive("xsm", `${FlexColumn}; padding-top: 5rem; padding-left: 2rem;`)}
`;
