import { FlexRow } from "Styles/Abstract/Mixins";
import { Center, Centerdashboard } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.main``;
export const TopNav = styled.nav`
  padding-block: 3rem;
`;
export const TopNavContainer = styled(Center)``;

export const Body = styled.section``;

export const BodyContainer = styled(Centerdashboard)`
  ${FlexRow}
  gap: 2.5rem;
  padding-top: 5rem;
`;

export const Left = styled.aside`
  position: sticky;
  top: 9rem;
`;
export const Right = styled.section``;
