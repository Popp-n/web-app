import { FlexRowJcCenterAiCenter } from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--gradient-4);
  padding-top: 9rem;
  padding-bottom: 6rem;
`;

export const Container = styled(Center)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;

  .left {
    flex-basis: 54.5rem;
    height: 55.8rem;
    position: relative;
  }
  .right {
    img {
      width: 9.8846rem;
      height: 3.82rem;
      vertical-align: middle;
    }
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
