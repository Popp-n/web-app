import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { CenterOnboard } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: var(--color-17);
  height: 100vh;
  width: 100vw;
  overflow: hidden auto;
`;

export const Container = styled(CenterOnboard)`
  ${FlexRowAiCenter}
`;

export const Nav = styled.nav`
  padding-block: 4rem;
`;

export const Body = styled.nav`
  background-image: url("/assets/images/circles-bg.svg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 76rem;
  padding-block: 30rem;
`;
