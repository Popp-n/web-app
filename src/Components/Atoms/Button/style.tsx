import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

const Button = styled.button`
  /* all: unset; */
  border: none;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  transition: 0.4s;
  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonStyle = styled(Button)`
  &.btn {
    /* Type */
    &-primary {
      border-radius: 3.2rem;
      border: 1px solid var(--color-primary);
      background-color: var(--color-primary);
      box-shadow: var(--shadow-1);
      padding: 1rem 2rem;
    }

    &-naked {
      padding: 1rem 2rem;
      border-radius: 0.8rem;
    }

    &-1 {
      border-radius: 4.3rem;
      border: 1px solid var(--color-1);
      background-color: var(--color-white);
      box-shadow: var(--shadow-1);
      padding: 1.6rem 2.8rem;
    }

    &-2 {
      ${FlexRowAiCenter};
      gap: 2.1rem;
    }

    &-3 {
      border-radius: 40.5rem;
      border: 0.2rem solid var(--color-black);
      background-color: var(--color-8);
      padding: 1.5rem 2.5rem;
      ${FlexRowAiCenter}
      gap: 2rem;

      color: var(--color-white);
      font-size: 1.7rem;
      font-weight: 400;

      &--color-1 {
        border: none;
        background-color: var(--color-1);
      }
    }

    &-4 {
      border-radius: 3.2rem;
      background-color: var(--color-primary);
      box-shadow: var(--shadow-5);
      text-align: center;
      width: 100%;
    }

    /* Colors */

    /* Size */
    &-full {
      padding: 2rem 4rem;
      width: 100%;
    }

    &-md {
      width: 100%;
      padding: 1.7rem 3rem;
    }

    &-sm {
    }
  }
`;
