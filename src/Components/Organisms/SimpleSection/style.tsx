import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumnJcCenterAiCenter,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--gradient-4);
  padding-top: 9rem;
  padding-bottom: 6rem;

  ${responsive("xmd", `padding-bottom: 0rem;`)}
`;

export const Container = styled(Center)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;

  ${responsive(
    "xmd",
    `${FlexColumnJcCenterAiCenter}; flex-direction: column-reverse; text-align: center;`
  )}

  .left {
    flex-basis: 54.5rem;
    max-height: 55.8rem;
    position: relative;
    ${responsive("xmd", `flex-basis: auto;`)}

    img {
      ${ImageDefault}
    }
  }
  .right {
  }
`;

export const DiscoverImageContainer = styled.div`
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.discover-1 {
    width: 391px;
    height: 391px;
    right: 14px;
    z-index: 1;
  }

  &.discover-2 {
    width: 309px;
    height: 309px;
    top: 143px;
    z-index: 2;
  }

  &.shadow-1 {
    bottom: 0;
  }
  &.shadow-2 {
    right: 0;
    bottom: 56px;
  }
`;
