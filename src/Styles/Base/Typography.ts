import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .h {
    &-1 {
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 110%;
      color: var(--color-white);
    }
    &-2 {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--color-1);
    }
    &-3 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-1);
    }
    &-4 {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 140%;
      color: var(--color-white);
    }
    &-5 {
      font-size: 1.35rem;
      font-weight: 600;
      line-height: 130%;
      color: var(--color-1);
    }
    &-6 {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--color-primary);
    }
    &-7 {
      font-size: 2.1rem;
      font-weight: 600;
      color: var(--color-white);
    }
    &-8 {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 135%;
      color: var(--color-1);
    }
    &-9 {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--color-white);
    }
    &-10 {
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 7.1rem;
      color: var(--color-white);
    }
    &-11 {
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 135%;
      color: var(--color-1);
    }
    &-12 {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-14);
    }
    &-13 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 145%;
      color: var(--color-1);
    }
    &-14 {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--color-primary);
    }
    &-15 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-1);
    }
    &-16 {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-1);
    }
    &-17 {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--color-primary);
    }
    &-18 {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--color-1);
    }
    &-19 {
      font-size: 15px;
      font-weight: 300;
      color: var(--color-10);
    }
    &-20 {
      font-size: 1.7rem;
      font-weight: 400;
      color: var(--color-10);
    }
    &-21 {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 150%;
      color: var(--color-1);
    }
    &-22 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-10);
    }
    &-23 {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 145%;
      color: var(--color-1);

      &--2 {
        color: var(--color-13);
      }
      &--3 {
        color: var(--color-3);
      }
      &--primary {
        color: var(--color-primary);
      }
    }

    &-24 {
      font-size: 1.9rem;
      font-weight: 500;
      color: var(--color-1);
    }
    &-25 {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-primary);
    }
    &-26 {
      font-size: 1.9rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-13);
    }
    &-27 {
      font-size: 4rem;
      font-weight: 600;
      line-height: 130%;
      letter-spacing: -1px;
      color: var(--color-1);
    }
    &-28 {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--color-1);
    }
  }

  /* Body || Paragraphs */
  .b,
  .p {
    &-1 {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-1);
    }
    &-2 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-1);
    }
    &-3 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 120%;
      color: var(--color-9);
    }
    &-4 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-10);
    }
    &-5 {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--color-10);
    }
    &-6 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 170%;
      color: var(--color-1);
    }
    &-7 {
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: -0.21px;
      color: var(--color-1);
    }
    &-8 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 140%;
      color: var(--color-10);
    }
    &-9 {
      font-size: 1.2rem;
      color: var(--color-10);
    }
    &-10 {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.05rem;
      color: var(--color-white);
    }
    &-11 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
      color: var(--color-10);
    }
    &-12 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-1);
    }
    &-13 {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--color-10);

      &--bold {
        font-weight: 600;
      }
    }
    &-14 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 130%;
      color: var(--color-13);
    }
    &-15 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-primary);
    }
    &-16 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-10);
    }
    &-17 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-13);
    }
    &-18 {
      font-size: 1.65rem;
      font-weight: 300;
      line-height: 150%;
      color: var(--color-1);
      text-align: justify;
    }
  }
  /* Link */
  .l {
    text-decoration: none;
    cursor: pointer;

    &-1 {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-1);
    }
    &-2 {
      border-radius: 0.5rem;
      color: var(--color-2);
      background-color: var(--color-primary);
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem 3.5rem;
    }
    &-3 {
      border-radius: 0.5rem;
      border: 1px solid var(--color-1);
      background-color: var(--color-white);
      color: var(--color-1);
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem 3.5rem;
    }
    &-4 {
      color: var(--color-1);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;
