import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }

  &.btn {
    color: var(--color-white);
    transition: 0.4s;

    /* Type */
    &-primary {
      border-radius: 0.5rem;
      color: var(--color-2);
      background-color: var(--color-primary);
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem 3.5rem;
    }

    &-naked {
      border-radius: 0.5rem;
      border: 1px solid var(--color-11);
      background-color: var(--color-white);
      color: var(--color-11);
    }

    &-display-type {
      ${FlexRowAiCenter}
      gap: .5rem;
      background-color: var(--color-white);
      border: 1px solid var(--color-19);
      padding: 0.9rem 1.4rem;
      border-radius: 0.4rem;
      color: var(--color-1);
      transition: 0.4s;

      &.active {
        border: 1px solid var(--color-20);
        box-shadow: var(--shadow-4);
      }
    }

    &-1 {
      border-radius: 0.5rem;
      border: 1px solid var(--color-1);
      background-color: var(--color-white);
      color: var(--color-1);
      font-size: 1.4rem;
      font-weight: 600;
      padding: 1rem 3.5rem;
    }

    &-2 {
      border-radius: 0.5rem;
      background-color: var(--color-11);
    }

    /* Colors */

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }

    &-md {
      padding: 0.9rem 2.5rem;
      font-size: 1.3rem;
    }

    &-small,
    &-sm {
      padding: 0.6rem 2.3rem;
      font-size: 1.3rem;
    }
  }
`;
