import {
  FlexColumnAiCenter,
  FlexColumnJcBetween,
  FlexColumnJcCenterAiCenter,
  FlexRow,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcBetweenAiEnd,
  FlexRowJcCenterAiCenter,
  FlexRowJcEndAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center, CenterSm, CenterTesti } from "Styles/layouts/Center";
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

  &.section-brand-audience {
    padding-block: 7rem;
  }

  &.section-rewarding {
    padding-block: 5rem;
  }

  &.section-testi {
    padding-top: 20rem;
    padding-bottom: 16rem;
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
    padding-right: 2rem;
    gap: -3rem;
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
  }

  .left-container {
    position: absolute;
    bottom: 8.4rem;
  }

  .right-container {
    position: absolute;
    right: 0;
    top: 11rem;
  }
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

export const RewardingSectionContainer = styled(Container)`
  ${FlexRowJcBetweenAiCenter}
  gap: 7rem;

  .image-container {
    width: 55.9rem;
    height: 53.42rem;

    img {
      ${ImageDefault}
    }
  }
`;

export const TestimonialContainer = styled(CenterTesti)`
  ${FlexRowAiCenter}
  gap: 10rem;

  .left {
    ${FlexColumnJcBetween}
    gap: 6.2rem;
  }

  .left__togglers {
    ${FlexRowAiCenter}
    gap: 2.5rem;
  }

  .left__toggler {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: var(--color-14);

    &.active {
      background-color: var(--color-15);
    }
  }

  .test-container {
    position: relative;
    flex-grow: 1;

    .shadow-bg {
      position: absolute;
      width: 643px;
      height: 700px;
      top: -300px;
      right: -135px;
    }
  }
`;

export const TestiCards = styled.div`
  position: relative;
  height: 25rem;
`;

export const TestiCard = styled.div`
  position: absolute;
  ${FlexColumnJcBetween}
  gap: 4.5rem;
  border-radius: 1rem;
  background-color: var(--color-white);
  padding: 2.8rem;
  width: max-content;
  /* height: 24rem; */
  box-shadow: var(--shadow-4);

  &.active {
    transform: translateY(-7.7rem);
    z-index: 1;
  }
  &.inactive {
    transform: translateX(4rem);

    border: 2px solid var(--color-13);
    background-color: transparent;
    box-shadow: var(--shadow-4);
  }
`;

export const Person = styled.div`
  --width: 6.8rem;
  --height: 6.8rem;

  position: absolute;
  top: calc(-1 * var(--width) / 2);
  left: calc(-1 * var(--height) / 2);
  width: var(--width);
  height: var(--height);
  background-color: #00800048;
  z-index: 1;
  border-radius: 50%;
  overflow: hidden;

  img {
    ${ImageDefault}
    border-radius: 50%;
  }
`;

export const TestimonialToggle = styled.div`
  position: absolute;
  right: 0;
  top: 5rem;
  ${FlexColumnJcBetween}
  gap: 1rem;
  height: 9.2rem;
  padding: 1rem 0.8rem;
  border-radius: 1.9rem;
  background-color: var(--color-white);
`;

export const Footer = styled.footer`
  background-color: var(--color-9);
  padding-block: 3.5rem;
`;

export const FooterContainer = styled(Container)``;

export const FooterTop = styled.div`
  ${FlexColumnJcCenterAiCenter}

  .image-container {
    width: 402.457px;
    height: 270px;

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
export const FooterBottom = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;

  .left {
  }
  .right {
  }
  .footer-links {
    ${FlexRowAiCenter}
    gap: 3.2rem
  }
  .footer-icons {
    ${FlexRowJcEndAiCenter}
    gap: 2.4rem;
  }
`;
