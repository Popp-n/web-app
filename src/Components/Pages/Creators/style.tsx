import {
  FlexColumnAiCenter,
  FlexRowAiCenter,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterChallenge, CenterHero } from "Styles/layouts/Center";
import styled from "styled-components";

export const Header = styled.section`
  padding-block: 13rem;
  background-image: url("/assets/images/creators-hero-bg.png");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;
`;

export const Section = styled.section`
  &.section {
    &__craft {
      padding-block: 10rem;
    }
    &__discover {
      background: var(--gradient-3);
      padding-top: 9rem;
      padding-bottom: 6rem;
    }
    &__challenge {
      background: var(--gradient-1);
      padding-top: 6rem;
      padding-bottom: 9rem;
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
  padding: 9rem 8rem;

  ${FlexColumnAiCenter}

  .img-container {
    width: 63.1rem;
    height: 37.2159rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const DiscoverContainer = styled(Container)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;

  .left {
    flex-basis: 54.5rem;
    height: 55.8rem;
    position: relative;
  }
  .right {
    img {
      width: 9.8846rem;
      height: 3.82rem;
      vertical-align: middle;
    }
  }
`;

export const DiscoverImageContainer = styled.div`
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.discover-1 {
    width: 391px;
    height: 391px;
    right: 14px;
    z-index: 1;
  }

  &.discover-2 {
    width: 309px;
    height: 309px;
    top: 143px;
    z-index: 2;
  }

  &.shadow-1 {
    bottom: 0;
  }
  &.shadow-2 {
    right: 0;
    bottom: 56px;
  }
`;

export const ChallengeContainer = styled(CenterChallenge)`
  position: relative;
  height: 91.7rem;

  .image-container-1 {
    position: absolute;
    width: 42.1961rem;
    height: 34.106rem;
    top: -1rem;

    img {
      ${ImageDefault}
    }
  }
  .image-container-2 {
    position: absolute;
    width: 42.1961rem;
    height: 34.106rem;
    top: 8rem;
    right: 0;

    img {
      ${ImageDefault}
    }
  }
  .trending-container {
    position: absolute;
    bottom: 0;

    ${FlexRowAiCenter}
    gap: 1rem;
  }
`;
