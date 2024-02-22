import { FlexColumn, FlexRow, FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { Centerdashboard } from "Styles/layouts/Center";
import styled from "styled-components";

export const Body = styled.main`
  padding-block: 4rem;
`;
export const Container = styled(Centerdashboard)`
  ${FlexRow}
  gap: 2.5rem;
  padding-top: 5rem;
`;

export const Left = styled.aside`
  position: sticky;
  top: 9rem;
  flex-shrink: 0;
`;
export const Right = styled.section`
  flex-grow: 1;
`;

export const Navs = styled.div`
  ${FlexColumn}
  gap: .5rem;
`;

export const NavItem = styled.button`
  all: unset;
  cursor: pointer;
  ${FlexRowAiCenter}
  gap: 1.2rem;
  padding: 1.2rem 4rem 1.2rem 1.5rem;
  border-radius: 0.8rem;
  transition: 0.4s;

  &.active,
  &:hover {
    background-color: var(--color-25);

    path {
      /* fill: var(--color-26); */
    }
  }
`;

export const Footer = styled.footer`
  padding-block: 4rem;
  background-color: var(--color-9);
`;
