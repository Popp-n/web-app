import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumn,
  FlexColumnAiCenter,
  FlexColumnAiStart,
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowJcBetweenAiCenter,
  FlexRowJcBetweenAiEnd,
  FlexRowJcCenterAiCenter,
  FlexRowJcEndAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterSm } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section-poppn {
    background: var(--gradient-1);
    padding-block: 15rem;
  }

  &.section-about-poppn {
    background: var(--gradient-2);
    padding-top: 9rem;
    padding-bottom: 0;

    ${responsive("sm", "padding-bottom: 10rem;")}
  }

  &.section-at-poppn {
    padding-block: 8rem;
  }

  &.section-brand-audience {
    padding-block: 7rem;
  }
`;

export const Container = styled(Center)``;

export const Letters = styled.div`
  /* padding-block: 15rem; */
  ${FlexColumnJcCenterAiCenter}

  .letters-imgs-container {
    position: relative;
    max-width: 989px;
    max-height: 304.844px;
    flex-shrink: 0;
    /* background-color: green; */

    img {
      width: 100%;
      height: 100%;
    }
  }

  .letters-img-container {
    position: absolute;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .l-i-c-1 {
    max-width: 22.5703rem;
    max-height: 27.1608rem;
    top: 3.324rem;
    left: 0;
  }
  .l-i-c-2 {
    max-width: 22.5703rem;
    max-height: 18.7448rem;
    top: 3.324rem;
    left: 17.127rem;
    z-index: 1;
  }
  .l-i-c-3 {
    max-width: 22.5703rem;
    max-height: 27.1608rem;
    top: 3.324rem;
    left: 34.237rem;
  }
  .l-i-c-4 {
    max-width: 25.9703rem;
    max-height: 30.5608rem;
    top: 3.324rem;
    left: 52.36rem;
    z-index: 1;
  }
  .l-i-c-5 {
    max-width: 7.0511rem;
    max-height: 11.1642rem;
    top: 0;
    left: 73.647rem;
  }
  .l-i-c-6 {
    max-width: 20.4096rem;
    max-height: 25.6306rem;
    top: 4.854rem;
    left: 78.456rem;
    z-index: 1;
  }
`;

export const AboutContainer = styled(Container)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;

  .left {
    flex-basis: 54.5rem;
    height: 55.8rem;
    position: relative;

    .img-container {
      max-width: 54.5rem;
      max-height: 50.8rem;

      img {
        ${ImageDefault}
      }
    }
  }
  .right {
    .about-text {
      margin-top: -13rem;
    }

    img {
      width: 9.8846rem;
      height: 3.82rem;
      vertical-align: middle;
    }
  }

  ${responsive(
    "sm",
    "flex-direction: column; align-items: center; justify-contents: center;"
  )}
`;

export const LeftImageContainer = styled.div`
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &.blue-1 {
    width: 391px;
    height: 391px;
    right: 14px;
    z-index: 1;
  }
  &.blue-2 {
    width: 309px;
    height: 309px;
    top: 143px;
    z-index: 1;
    opacity: 0;
  }
  &.red-1 {
    width: 309px;
    height: 309px;
    top: 143px;
    z-index: 2;
  }
  &.red-2 {
    width: 391px;
    height: 391px;
    right: 14px;
    z-index: 2;
    opacity: 0;
  }
  &.shadow-1 {
    bottom: 0;
  }
  &.shadow-2 {
    right: 0;
    bottom: 56px;
  }
`;

export const AtPoppnContainer = styled(Container)`
  border-radius: 2.9366rem;
  background-image: url("/assets/images/at-poppn-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top right;
  padding: 8rem;

  ${responsive(
    "md",
    `padding: 4rem; background-image: url("/assets/images/at-poppn-gb-mobile.png");`
  )}

  .logo {
    width: 8.8846rem;
    height: 3.82rem;
    vertical-align: middle;
  }

  .about-heading-text {
    ${responsive("md", `text-align: center`)}
  }

  .down-section {
    ${FlexRowJcBetweenAiEnd}
    gap: 6rem;

    &__left {
    }
    &__content {
      ${FlexRow}
      gap: 1rem;
    }
    &__right {
      ${FlexRowJcBetweenAiEnd}
      gap: 3rem;
      &-image {
      }
    }
    &__right-image-container {
      width: 28.9392rem;
      height: 21.197rem;
      border-radius: 0.5rem;
      overflow: hidden;

      img {
        ${ImageDefault}
      }
    }

    &__right-image-2-container {
      width: 193.179px;
      height: 378.841px;
      border-radius: 17px;
      border: 4px solid #fff;
      background: #f0f0f0;
      padding-top: 2.1rem;
      padding-bottom: 3.7rem;

      ${FlexColumnAiCenter}

      img {
        margin-bottom: 1.5rem;
      }

      .img-1 {
        width: 73.992px;
        height: 73.992px;
        margin-bottom: 2.5rem;
      }
      .img-2 {
        width: 151.092px;
        height: 34.617px;
      }
      .img-3 {
        width: 151.092px;
        height: 31.336px;
      }
      .img-4 {
        width: 151.092px;
        height: 31.336px;
      }
      .img-5 {
        width: 151.092px;
        height: 31.336px;
      }
      .img-6 {
        width: 151.092px;
        height: 31.336px;
        margin-bottom: none;
      }
    }

    ${responsive("md", `${FlexColumnAiCenter}`)}
  }

  .socials {
    ${FlexRowJcEndAiCenter}
    padding-right: 2rem;
    gap: -3rem;

    ${responsive("md", `${FlexRowJcCenterAiCenter}`)}
  }
`;

export const PromotingSectionContainer = styled(CenterSm)`
  position: relative;
  height: 58rem;

  .image-container {
    position: absolute;
    left: 17.4rem;
    top: 0;
    height: 55rem;

    img {
      ${ImageDefault}
    }

    ${responsive(
      "sm",
      `max-with: 50rem; max-height: 39rem; position: relative; left: auto; top: auto;`
    )}
  }

  .left-container {
    position: absolute;
    bottom: 8.4rem;

    ${responsive("sm", `position: relative; bottom: auto;`)}
  }

  .right-container {
    position: absolute;
    right: 0;
    top: 11rem;

    ${responsive("sm", `position: relative; left: auto; top: auto;`)}
  }

  .promotion-section-texts {
    ${responsive("sm", `text-align: center;`)}
  }

  ${responsive(
    "sm",
    `${FlexColumnJcCenterAiCenter}; flex-direction: column-reverse; gap: 5rem; height: auto;`
  )}
`;

export const BrandAudContainer = styled(Container)`
  border-radius: 2.56rem;
  background: var(--color-6);
  padding-inline: 8rem;
  padding-right: 0;
  ${FlexRowJcBetweenAiCenter}
  gap: 5rem;

  .right-image-container {
    position: relative;
    height: 58.9rem;

    .img {
      ${ImageDefault}
    }

    .shadow {
      position: absolute;
      width: 35.4rem;
      height: 36.7rem;
      right: 0;
    }
  }
`;
