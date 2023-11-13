import styled from "styled-components";

const Button = styled.button`
  all: unset;
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

    /* Colors */

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }

    &-md {
    }

    &-sm {
    }
  }
`;
