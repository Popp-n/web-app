import { FlexRowAiStart, FlexRowJcBetweenAiCenter, GridCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 1.2rem;
  overflow: hidden;
  background-color: var(--color-white);
  ${FlexRowJcBetweenAiCenter}
  margin-bottom: 2rem;
  width: 100%;

  &.no-margin {
    margin-bottom: 0;
  }

  &.is-password {
    padding-right: 2rem;
  }

  .input-ele {
    flex-grow: 1;
    padding-inline: 2rem;
    padding-block: 1.5rem;
    border: none;
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 400;

    &::placeholder {
      color: var(--color-18);
      font-family: Poppins;
      font-size: 1.5rem;
      font-weight: 400;
    }

    &:active,
    &:focus {
      outline: none;
      border: none;
    }
  }
`;


export const CheckBoxWrapper = styled.div`
  margin-top: 2.6rem;

  .element {
    display: none;
  }

  label {
    ${FlexRowAiStart}
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    color: var(--color-22);
    cursor: pointer;

    position: relative;
    padding-left: 2.6rem;

    &::before {
      ${GridCenter}
      margin-top: 0.4rem;
      position: absolute;
      content: "";
      width: 1.8rem;
      height: 1.8rem;
      left: 0;
      border-radius: 0.4rem;
      transition: 0.4s;

      font-size: 1rem;
      line-height: 0;

      color: var(--color-white);

      border: 0.2rem solid var(--color-1);
    }
  }

  .element:checked + label::before {
    background-color: var(--color-1);
    content: "✔";
  }
`;