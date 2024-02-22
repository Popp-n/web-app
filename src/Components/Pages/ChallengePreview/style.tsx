import {
  FlexRow,
  FlexRowAiCenter,
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
    flex-basis: 25.7rem;
    flex-shrink: 0;
  }

  .page-layout__right {
    flex-grow: 1;
  }
`;

export const PageSection = styled.section`
  transform: translateY(-11rem);
`;

export const ImageContainer = styled.div`
  max-width: 25.7rem;
  max-height: 25.153rem;
  border-radius: 2.157rem;
  overflow: hidden;

  img {
    ${ImageDefault}
  }
`;

export const Platform = styled.div`
  border-radius: 1rem;
  padding: 0.5rem 1.2rem;
  ${FlexRowAiCenter};
  gap: 0.6rem;
  border: 1px solid var(--color-37);
`;

export const UserEarningCardWrapper = styled.div`
  border-radius: 1.6rem;
  background: var(--color-23);
  padding: 2rem;
  margin-top: 3rem;

  ${FlexRowJcBetweenAiCenter};
  gap: 6rem;

  .cards {
    ${FlexRow};
    gap: 2.5rem;
  }
`;

export const UserEarningCard = styled.div`
  border-radius: 1rem;
  background: var(--color-white);
  ${FlexRowAiCenter}
  gap: 1.5rem;
  padding: 2.4rem 2rem;
`;

export const ListBox = styled.div`
  padding-left: 2rem;

  .challenge-list {
    list-style-type: decimal;
  }
`;

export const InputBox = styled.div`
  max-width: 30rem;
`;
