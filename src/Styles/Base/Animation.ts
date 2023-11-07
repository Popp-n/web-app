import { keyframes } from "styled-components";

// Keyframes
export const Rotate = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

// Framer animations
export const animateFadeOut = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { ease: "linear", duration: 0.4, delay: 0.002 },
};

export const animateFadeInUp = {
  variants: {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  },
  transition: { ease: "linear", duration: 0.4 },
};

export const animateSlideInRight = {
  variants: {
    hidden: { x: "100%" },
    visible: { x: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};

export const animateSlideInTop = {
  variants: {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  },
  transition: { ease: "easeOut", duration: 0.4, delay: 0.08 },
};

export const animateFade = {
  variants: {
    hidden: {
      opacity: 0,
      y: 5,
      transition: { duration: 0.4 },
    },
    visible: { opacity: 1, y: 0 },
    // exit: { opacity: 0, y: -5 },
  },
  transition: { ease: "easeIn", duration: 0.5 },
};
