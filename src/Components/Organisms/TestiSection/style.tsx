import { FlexColumnJcBetween, FlexRowAiCenter, ImageDefault } from "Styles/Abstract/Mixins";
import { CenterTesti } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-top: 20rem;
  padding-bottom: 16rem;
`;

export const TestimonialContainer = styled(CenterTesti)`
  ${FlexRowAiCenter}
  gap: 10rem;

  .left {
    ${FlexColumnJcBetween}
    gap: 5.2rem;
  }

  .left__togglers {
    ${FlexRowAiCenter}
    gap: 1.5rem;
  }

  .left__toggler {
    width: 1rem;
    height: 1rem;
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

