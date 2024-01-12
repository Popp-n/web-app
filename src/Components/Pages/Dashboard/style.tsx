import {
  FlexColumn,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcBetweenAiEnd,
  ImageDefault,
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

export const Ad = styled.div`
  border-radius: 1.2rem;
  max-height: 32.7rem;
  margin-block: 9.3rem;

  img {
    ${ImageDefault}
  }
`;

export const Challenges = styled.div``;

export const CreatorPopup = styled.div`
  margin-block: 9.3rem;

  .head {
    ${FlexRowJcBetweenAiEnd}
    gap: 2rem;
  }
`;

export const SectionHead = styled.div`
  ${FlexRowJcBetweenAiEnd}
  gap: 2rem;
`;

export const PopUp = styled.div`
  ${FlexRowAiCenter}
  gap: 1.5rem;

  .avatar {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;

    img {
      ${ImageDefault}
      border-radius: 50%;
    }
  }

  .username-n-follows {
    ${FlexColumn}
    gap: .7rem;
  }

  .follows {
    ${FlexRowAiCenter}
    gap: .6rem;
  }
`;

export const AllChallenges = styled.section`
  margin-block: 9.3rem;

  .container {
    ${FlexRow};
    gap: 6rem;

    .left {
      flex-basis: 30.9rem;
    }
    .right {
      flex-grow: 1;
    }
  }
`;
