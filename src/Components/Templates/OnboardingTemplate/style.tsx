import { responsive } from "Styles/Abstract/Breakpoints";
import { FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";
import { Center, CenterOnboard } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: var(--color-17);
  height: 100vh;
  width: 100vw;
  overflow: hidden auto;
`;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
`;

export const BodyContainer = styled(CenterOnboard)`
  ${FlexRowJcBetweenAiCenter}

  ${responsive("sm", "flex-wrap: wrap; flex-direction: column; gap: 6rem")}
`;

export const Nav = styled.nav`
  padding-block: 4rem;
`;

export const Body = styled.nav`
  background-image: url("/assets/images/circles-bg.svg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 76rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
`;
