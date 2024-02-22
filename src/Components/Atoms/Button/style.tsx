import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

const Button = styled.button`
  /* all: unset; */
  background-color: transparent;
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
    }
    &-5 {
      text-align: center;
      border-radius: 3.2rem;
      border: 2px solid var(--color-1);
      background-color: var(--color-white);
      box-shadow: 0 0.4rem 6.1rem 0 rgba(77, 71, 195, 0.2);
    }
    &-6 {
      color: #612897;
      font-size: 1.4rem;
      font-weight: 500;

      border-radius: 32px;
      border: 1px solid #929eae;
      background-color: #fff;

      /* Shadow/xs */
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

      padding: 0.9rem 3rem;
    }

    /* Colors */

    /* Size */
    &-full-size {
      width: 100%;
    }
    &-full {
      padding: 2rem 4rem;
      width: 100%;
    }

    &-md {
      padding: 1.7rem 3rem;
    }

    &-sm {
      padding: 1rem 3rem;
    }

    &-xsm {
      padding: 0.7rem 2.5rem;
    }

    /* Hover types */
    &-hover {
      &--1 {
        transition: 0.4s;
        position: relative;
        overflow: hidden;

        &:hover {
          background-color: var(--color-32);
          box-shadow: 0 1.5rem 5rem rgba(0, 0, 0, 0.3);
        }
        &:active {
          transform: scale(0.98);
          box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
