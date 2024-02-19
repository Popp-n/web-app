import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumnAiCenter,
  FlexColumnJcCenterAiCenter,
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

  ${responsive(
    "sm",
    `background-image: none; padding-top: 6rem; padding-bottom: 3rem;`
  )}
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
      /* padding-bottom: 9rem; */
    }
  }
`;

export const Container = styled(Center)``;

export const HeroContainer = styled(CenterHero)`
  ${responsive("sm", `${FlexColumnAiCenter}`)}
  text-align: center;

  .hero__image-container {
    max-width: 42.8rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const SuccessStoryContainer = styled(Container)`
  border-radius: 2.9366rem;
  background-image: url("/assets/images/at-poppn-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding: 9rem 8rem;

  ${FlexColumnAiCenter}

  ${responsive(
    "xsm",
    `padding: 4rem;  padding-inline: 2.5rem; background-image: url("/assets/images/at-poppn-gb-mobile.png");`
  )}

  .img-container {
    max-width: 63.1rem;
    max-height: 37.2159rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const DiscoverContainer = styled(Container)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;
  ${responsive(
    "xmd",
    `${FlexColumnJcCenterAiCenter}; flex-direction: column-reverse; text-align: center;`
  )}

  .left {
    flex-basis: 54.5rem;
    height: 55.8rem;
    position: relative;

    img {
      ${ImageDefault}
    }
  }
  .right {
    /* img {
      width: 9.8846rem;
      height: 3.82rem;
      vertical-align: middle;
    } */
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
  height: 88.7rem;
  ${responsive("md", `height: auto; ${FlexColumnJcCenterAiCenter}; gap: 2rem`)}

  .section__label {
    ${responsive("md", `text-align: center`)}
  }

  .image-container-1 {
    position: absolute;
    max-width: 42.1961rem;
    max-height: 34.106rem;
    top: -1rem;
    ${responsive("md", `position: relative; top: auto;`)}

    img {
      ${ImageDefault}
    }
  }
  .image-container-2 {
    position: absolute;
    max-width: 42.1961rem;
    max-height: 34.106rem;
    top: 8rem;
    right: 0;
    ${responsive("md", `position: relative; top: auto; right: auto;`)}

    img {
      ${ImageDefault}
    }
  }
  .trending-container {
    position: absolute;
    /* bottom: 0; */
    top: 40.6rem;
    left: 7rem;
    ${responsive("md", `position: relative; top: auto; left: auto`)}

    ${FlexRowAiCenter}
    gap: 1rem;
  }
  .trending-image-container {
    max-width: 37.1rem;
    max-height: 40.6rem;

    img {
      ${ImageDefault}
      ${responsive("md", `max-width: 42.1961rem; max-height: 34.106rem;`)}
    }
    ${responsive(
      "md",
      `max-width: 42.1961rem; max-height: 34.106rem; margin-bottom: 3rem;`
    )}
  }
`;
