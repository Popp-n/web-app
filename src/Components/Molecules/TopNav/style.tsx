import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.nav``;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
  padding-block: 1.4rem;
`;

export const TopNavLinks = styled.div`
  ${FlexRowAiCenter}
  gap: 3.3rem;
`;

export const TopNavCtas = styled.div`
  ${FlexRowAiCenter}
  gap: 1.2rem;
`;
