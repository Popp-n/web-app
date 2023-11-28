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
      font-size: 5.9487rem;
      font-weight: 600;
      line-height: 100%;
      color: var(--color-primary);
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
  }

  /* Body || Paragraphs */
  .p {
    &-1 {
      font-size: 2.2rem;
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
  }
`;
