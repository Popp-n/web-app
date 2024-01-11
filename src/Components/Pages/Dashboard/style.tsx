import {
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const EarningsTab = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 2rem;
`;

export const UserEarningCardWrapper = styled.div`
  border-radius: 1.6rem;
  background: var(--color-23);
  padding: 4rem 2.5rem;
  margin-top: 3rem;

  ${FlexRow};
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
