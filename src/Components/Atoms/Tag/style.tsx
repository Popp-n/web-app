import styled from "styled-components";

export const Wrapper = styled.button`
  all: unset;

  cursor: pointer;
  border-radius: 2.5rem;
  background-color: var(--color-white);
  padding: 0.75rem 1.5rem;

  color: var(--color-18);
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 400;
  transition: 0.4s;

  &.active {
    background-color: var(--color-1);
    color: var(--color-white);
  }
`;
