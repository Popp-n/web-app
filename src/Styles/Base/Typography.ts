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
  }

  /* Body || Paragraphs */
  .p {
    &-1 {
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
      font-family: var(--font-1);
      font-weight: 500;
      line-height: 155%;
      color: var(--color-3);
    }
  }
`;
