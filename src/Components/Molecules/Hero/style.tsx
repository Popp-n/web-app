import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { CenterHero } from "Styles/layouts/Center";

export const Wrapper = styled.header`
  background-image: url("assets/images/circles-bg.svg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 61.3rem 61.3rem;
`;

export const Container = styled(CenterHero)`
  ${FlexRowAiCenter}
  gap: 1rem;
`;

export const Left = styled.div`
  padding-block: 13rem;
`;

export const LeftCtas = styled.div`
  /* padding-top: 13rem; */
  ${FlexRowAiCenter}
  gap: 5rem;

  .play-icon {
    box-shadow: var(--shadow-2);
  }
`;

export const Right = styled.div`
  flex-basis: 50%;
`;
