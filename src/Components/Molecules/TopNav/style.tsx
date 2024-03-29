import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  ImageDefault,
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

// Dashboard top nav
export const TopNav = styled.nav`
  border-bottom: 1px solid var(--color-20);
  background-color: var(--color-white);
`;
export const TopNavContainer = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
  gap: 2rem;
  padding-block: 3rem;

  .left {
    ${FlexRowAiCenter};
    gap: 4.5rem;
  }
`;

export const UserAvatar = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  border: 0.35rem solid var(--color-21);

  img {
    border: 0.35rem solid var(--color-white);
    border-radius: 50%;
    ${ImageDefault}
  }
`;
