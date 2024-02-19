import { responsive } from "Styles/Abstract/Breakpoints";
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
    &__collaboration {
      background: var(--gradient-1);
      padding-block: 7rem;
    }
  }
`;

export const Container = styled(Center)``;

export const HeroContainer = styled(CenterHero)`
  ${responsive(
    "sm",
    `${FlexColumnAiCenter};text-align: center;
 `
  )}

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
  padding: 4rem 8rem;

  ${FlexColumnAiCenter}

  ${responsive(
    "xsm",
    `padding: 4rem; padding-top: .5rem; padding-inline: 2.5rem; background-image: url("/assets/images/at-poppn-gb-mobile.png");`
  )}

  .img-container {
    max-width: 41.2rem;
    max-height: 39.1rem;

    img {
      ${ImageDefault}
    }
  }

  .image-text {
    max-width: 12.1rem;
    max-height: 4.654rem;
    vertical-align: middle;
    border-radius: 1rem;
  }
`;

export const CollaborationContainer = styled(Container)`
  ${FlexRow}
  gap: 5rem;

  ${responsive(
    "ssm",
    `display: flex; flex-direction: column; align-items: center; gap: 4rem; text-align: center;`
  )}

  .collabo_left-side {
    ${responsive("ssm", `display: flex; flex-direction: column-reverse;`)}

    .collabo-sub-text {
      ${responsive("ssm", `max-width: 100%; text-align: center;`)}
    }
  }

  .img-1-2-holder {
    ${FlexRowAiCenter}
    gap: 5rem;

    ${responsive(
      "ssm",
      `display: flex; flex-direction: column; margin-top: 4rem;`
    )}
  }

  .img-1 {
    max-width: 39.2063rem;
    max-height: 32.0569rem;

    ${responsive("ssm", `max-width: 39.2063rem; max-height: 32.0569rem`)}

    img {
      ${ImageDefault}
    }
  }
  .img-2 {
    max-width: 25.3688rem;
    max-height: 41.5894rem;
    ${responsive("ssm", `max-width: 39.2rem; max-height: 41.6rem;`)}

    img {
      ${ImageDefault}
    }
  }
  .img-3-container {
    padding-top: 8rem;
    ${responsive("ssm", ` padding-top: 0rem;`)}
  }
  .img-3 {
    border-radius: 1rem;
    overflow: hidden;
    max-width: 45.2025rem;
    max-height: 65.8819rem;
    ${responsive("ssm", `max-width:  45.2025rem; max-height: 65.8819rem;`)}

    img {
      ${ImageDefault}
    }
  }
`;
