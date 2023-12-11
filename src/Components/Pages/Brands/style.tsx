import {
  FlexColumnAiCenter,
  FlexRow,
  FlexRowAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterHero } from "Styles/layouts/Center";
import styled from "styled-components";

export const Header = styled.section`
  padding-block: 13rem;
  background-image: url("/assets/images/brands-bg.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
`;

export const Section = styled.section`
  &.section {
    &__craft {
      padding-block: 10rem;
    }
    &__collaboration {
      background: var(--gradient-1);
      padding-block: 7rem;
    }
  }
`;

export const Container = styled(Center)``;

export const HeroContainer = styled(CenterHero)``;

export const SuccessStoryContainer = styled(Container)`
  border-radius: 2.9366rem;
  background-image: url("/assets/images/at-poppn-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding: 4rem 8rem;

  ${FlexColumnAiCenter}

  .img-container {
    width: 41.2rem;
    height: 39.1rem;

    img {
      ${ImageDefault}
    }
  }

  .image-text {
    width: 12.1rem;
    height: 4.654rem;
    vertical-align: middle;
    border-radius: 1rem;
  }
`;

export const CollaborationContainer = styled(Container)`
  ${FlexRow}
  gap: 5rem;

  .img-1-2-holder {
    ${FlexRowAiCenter}
    gap: 5rem;
  }

  .img-1 {
    width: 392.063px;
    height: 320.569px;

    img {
      ${ImageDefault}
    }
  }
  .img-2 {
    width: 253.688px;
    height: 415.894px;

    img {
      ${ImageDefault}
    }
  }
  .img-3-container {
    padding-top: 8rem;
  }
  .img-3 {
    border-radius: 1rem;
    overflow: hidden;
    width: 452.025px;
    height: 658.819px;

    img {
      ${ImageDefault}
    }
  }
`;
