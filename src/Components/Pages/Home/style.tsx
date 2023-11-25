import {
  FlexColumnAiCenter,
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowJcBetweenAiEnd,
  FlexRowJcCenterAiCenter,
  FlexRowJcEndAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section-poppn {
    background: var(--gradient-1);
    padding-block: 15rem;
  }

  &.section-about-poppn {
    background: var(--gradient-2);
    padding-top: 9rem;
    padding-bottom: 6rem;
  }

  &.section-at-poppn {
    padding-block: 8rem;
  }
`;

export const Container = styled(Center)``;

export const Letters = styled.div`
  /* padding-block: 15rem; */
  ${FlexColumnJcCenterAiCenter}

  .letters-imgs-container {
    position: relative;
    width: 989px;
    height: 304.844px;
    flex-shrink: 0;
    /* background-color: green; */
  }

  .letters-img-container {
    position: absolute;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .l-i-c-1 {
    width: 225.703px;
    height: 271.608px;
    top: 33.24px;
    left: 0;
  }
  .l-i-c-2 {
    width: 225.703px;
    height: 187.448px;
    top: 33.24px;
    left: 171.27px;
    z-index: 1;
  }
  .l-i-c-3 {
    width: 225.703px;
    height: 271.608px;
    top: 33.24px;
    left: 342.37px;
  }
  .l-i-c-4 {
    width: 259.703px;
    height: 305.608px;
    top: 33.24px;
    left: 523.6px;
    z-index: 1;
  }
  .l-i-c-5 {
    width: 70.511px;
    height: 111.642px;
    top: 0;
    left: 736.47px;
  }
  .l-i-c-6 {
    width: 204.096px;
    height: 256.306px;
    top: 48.54px;
    left: 784.56px;
    z-index: 1;
  }
`;

export const AboutContainer = styled(Container)`
  ${FlexRowJcCenterAiCenter}
  gap: 8rem;

  .left {
    flex-basis: 54.5rem;
    height: 55.8rem;
    /* background-color: blue; */
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

  .logo {
    width: 8.8846rem;
    height: 3.82rem;
    vertical-align: middle;
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
  }

  .socials {
    ${FlexRowJcEndAiCenter}
    gap: -3rem;
    padding-right: 2rem;
  }
`;
