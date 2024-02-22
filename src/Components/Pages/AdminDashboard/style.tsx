import {
  FlexColumn,
  FlexRow,
  FlexRowJcBetweenAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Centerdashboard } from "Styles/layouts/Center";
import styled from "styled-components";

export const Container = styled(Centerdashboard)`
  padding-block: 4rem;
`;

export const TopSection = styled.div`
  background-color: var(--color-35);
  padding-bottom: 7rem;
`;

export const PageLayout = styled.div`
  ${FlexRow}
  gap: 5rem;

  .page-layout__left {
    flex-basis: 14.6rem;
    flex-shrink: 0;
  }

  .page-layout__right {
    flex-grow: 1;
    margin-top: -1rem;
  }
`;

export const PageSection = styled.section`
  transform: translateY(-11rem);
`;

export const ImageContainer = styled.div`
  max-width: 14.6rem;
  max-height: 14.6rem;
  border-radius: 50%;
  border: 10px solid var(--color-23);
  overflow: hidden;

  img {
    ${ImageDefault}
  }
`;

export const Socials = styled.div`
  ${FlexColumn}
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
`;

export const UserNameContainer = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 2rem;
`;
