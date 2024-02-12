import { responsive } from "Styles/Abstract/Breakpoints";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: var(--font-primary);
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .h {
    &-1 {
      font-size: clamp(3rem, 5vw, 5.9487rem);
      font-weight: 600;
      line-height: 100%;
      color: var(--color-primary);

      ${responsive("sm", `line-height: 140%;`)}
    }
    &-2 {
      font-size: 3.9658rem;
      font-weight: 400;
      line-height: 110%;
      color: var(--color-primary);
    }
    &-3 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 154.915%;
      letter-spacing: 0.288rem;
      color: var(--color-primary);
      &--2 {
        color: var(--color-1);
      }
    }
    &-4 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 103.087%;
      color: var(--color-5);
    }
    &-5 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 103.087%;
      color: var(--color-5);
    }
    &-6 {
      font-size: 2.7rem;
      font-weight: 600;
      line-height: 106.868%;
      color: var(--color-primary);
    }
    &-7 {
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 123.705%;
      color: var(--color-primary);
    }
    &-8 {
      font-size: 3.2rem;
      font-weight: 600;
      line-height: 154.631%;
      color: var(--color-primary);
    }
    &-9 {
      font-size: 4rem;
      font-weight: 700;
      font-family: Poppins;
      text-transform: capitalize;
      color: var(--color-11);
      line-height: 150%;
      &--color-1 {
        color: var(--color-1);
      }
      &--color-primary {
        color: var(--color-primary);
      }
    }
    &-10 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: normal;
      color: var(--color-12);
    }
    &-11 {
      color: var(--color-primary);
      font-family: Poppins;
      font-size: 5.9487rem;
      font-weight: 600;
      line-height: 120.181%;
    }
    &-12 {
      color: var(--color-5);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 600;
      line-height: 103.087%;
    }
    &-13 {
      color: var(--color-5);
      font-family: Poppins;
      font-size: 3.8rem;
      font-weight: 600;
      line-height: 103.087%;
    }
    &-14 {
      color: var(--color-white);
      font-family: Itim;
      font-size: 5.9487rem;
      font-weight: 400;
      line-height: 99.181%;
    }
    &-15 {
      color: var(--color-primary);
      font-family: Itim;
      font-size: 4.5rem;
      font-weight: 400;
      line-height: 99.181%;
    }
    &-16 {
      font-family: Poppins;
      font-size: 48px;
      font-style: normal;
      font-weight: 800;
      line-height: 88%; /* 42.24px */
      text-transform: uppercase;

      background: radial-gradient(
        2270.79% 150.3% at 100% 69.88%,
        #b0b0b0 0%,
        #fafafa 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &-17 {
      color: var(--color-primary);
      font-family: Poppins;
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 122.917%;
    }
    &-18 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 5.3697rem;
      font-size: clamp(3rem, 10vw, 5.3697rem);
      font-weight: 600;
      line-height: normal;
    }
    &-19 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: normal;
    }
    &-20 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: normal;
    }
    &-21 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-22 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.7rem;
      font-weight: 500;
      line-height: normal;
    }
    &-23 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: normal;
    }
    &-24 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 2.7rem;
      font-weight: 600;
      line-height: normal;
    }
    &-25 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-26 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-27 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
    }
    &-28 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 1.6pxrem;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
    &-29 {
      color: var(--color-24);
      font-family: Poppins;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
    }
    &-30 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: normal;
    }
    &-31 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.7rem;
      font-weight: 600;
      line-height: normal;
    }
    &-32 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-33 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
    &-34 {
      color: var(--color-22);
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-35 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: normal;
    }
    &-36 {
      color: var(--color-10);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 600;
      line-height: normal;
    }
  }

  /* Body || Paragraphs */
  .p {
    &-1 {
      font-size: 2.2rem;
      font-size: clamp(1.8rem, 5vw, 2.2rem);
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-white);
    }
    &-2 {
      font-size: 2rem;
      font-weight: 400;
      line-height: 3.7585rem;
      color: var(--color-5);
    }
    &-3 {
      font-size: 1.32rem;
      font-weight: 400;
      line-height: 156.604%;
      color: var(--color-5);
    }
    &-4 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 3.8585rem;
      color: var(--color-primary);
    }
    &-5 {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-7);
    }
    &-6 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 241.157%;
      color: var(--color-10);
    }
    &-7 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-7);
    }
    &-8 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 200%;
      color: var(--color-12);
    }
    &-9 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: normal;
      color: var(--color-12);
    }
    &-10 {
      color: var(--color-7);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 400;
      line-height: 150%;
      mix-blend-mode: multiply;
    }
    &-11 {
      color: var(--color-12);
      font-family: Poppins;
      font-size: 1.32rem;
      font-weight: 400;
      line-height: 156.604%;
    }
    &-12 {
      color: var(--color-5);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 200;
      line-height: 3.7585rem;
    }
    &-13 {
      color: var(--color-white);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-14 {
      color: var(--color-16);
      font-size: 0.9764rem;
      font-weight: 400;
      line-height: 200%;
    }
    &-15 {
      color: var(--color-7);
      font-family: Poppins;
      font-size: 2rem;
      font-weight: 400;
      line-height: 150%;
    }
    &-16 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.7183rem;
      font-weight: 400;
      line-height: normal;
    }
    &-17 {
      color: var(--color-primary);
      font-family: Poppins;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      position: relative;

      &::after {
        position: absolute;
        content: url("/assets/images/down-slash.svg");
        left: 1rem;
        top: 70%;
      }
    }
    &-18 {
      color: var(--color-19);
      font-family: Poppins;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &-19 {
      color: var(--color-22);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
    &-20 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: normal;
    }
    &-21 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: normal;
    }
    &-22 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 400;
    }
    &-23 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: normal;

      &--heavy {
        font-weight: 700;
        text-decoration-line: underline;
      }
    }

    &-24 {
      color: var(--color-black);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  /* Link */
  .l {
    text-decoration: none;

    &-1 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-black);
      transition: 0.4s;
      text-transform: capitalize;

      &.active {
        color: var(--color-1);
      }

      &:hover {
        color: var(--color-1);
      }
    }

    &-2 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-primary);
      text-decoration: none;
      text-transform: uppercase;
    }

    &-3 {
      color: var(--color-1);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 142.857%;
    }
    &-4 {
      color: var(--color-1);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: normal;
      text-decoration: underline;
    }
    &-5 {
      color: var(--color-22);
      font-family: Poppins;
      font-size: 1.6rem;
      font-weight: 500;
      ${FlexRowAiCenter}
      gap: 1rem;
    }
  }

  /* Buttom texts */
  .b {
    &-1 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-white);
    }
    &-2 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 150%;
      transition: 0.4s;
      text-transform: capitalize;
      color: var(--color-2);
    }
    &-3 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 155%;
      font-family: var(--font-1);
      color: var(--color-3);
    }
    &-4 {
      font-size: 1.7rem;
      font-weight: 500;
      font-family: var(--font-1);
      color: var(--color-4);
    }
    &-5 {
      color: var(--color-white);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-6 {
      color: var(--color-primary);
      font-family: Poppins;
      font-size: 1.4rem;
      font-weight: 500;
    }
    &-7 {
      color: var(--color-white);
      font-family: Poppins;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: normal;

      ${FlexRowAiCenter}
      gap: 1rem;

      // position: relative;
      // overflow: hidden;

      // &::after {
      //   position: absolute;
      //   content: "";
      //   inset: 0;
      //   // background-color: rgba(0, 0, 0, 0.1);
      //   width: 100%;
      //   height: 100%;
      //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      //   transition: 0.4s;
      // }

      // &:hover {
      //   &::after {
      //     background-color: rgba(0, 0, 0, 0.2);
      //     clip-path: polygon(0 82%, 100% 33%, 100% 100%, 0% 100%);
      //   }
      // }
    }
  }
`;
