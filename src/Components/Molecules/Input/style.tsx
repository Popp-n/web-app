import {
  FlexRowAiStart,
  FlexRowJcBetweenAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
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

export const RangeStyle = styled.div`
  width: 100%;

  /* Apply styles to the entire range input */
  input[type="range"] {
    width: 100%;
    background-color: var(--color-white);
    border: none;
    height: 0.7rem;
    outline: none;
    border-radius: 3rem;
  }

  /* Apply styles to the thumb (slider handle) */
  input[type="range"]::-webkit-slider-thumb {
    background-color: var(--color-white);
    border: 1px solid var(--color-18);
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0.5rem rgba(205, 174, 234, 0.2);
  }

  /* Apply styles to the thumb for Firefox */
  input[type="range"]::-moz-range-thumb {
    background-color: var(--color-white);
    border: 0.4rem solid var(--color-18);
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0.5rem rgba(205, 174, 234, 0.2);
  }

  /* Apply styles to the track for Firefox */
  input[type="range"]::-moz-range-track {
    background-color: var(--color-white);
    border: none;
    height: 0.7rem;
    border-radius: 0.7rem;
  }

  /* Apply styles to the track for IE */
  input[type="range"]::-ms-track {
    border: none;
    background-color: var(--color-white);
    height: 0.4rem;
    border-radius: 3rem;
  }

  /* Apply styles to the thumb for IE */
  input[type="range"]::-ms-thumb {
    background-color: var(--color-white);
    border: 0.3rem solid var(--color-18);
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 0 0.5rem rgba(205, 174, 234, 0.8);
  }

  /* General styles for the range input */
  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 0.7rem 0;
  }

  /* Track styles */
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.4rem;
    cursor: pointer;
    background-color: var(--color-white);
    border-radius: 3rem;
    border: none;
  }

  /* Thumb (slider handle) styles */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 2.1rem;
    width: 2.1rem;
    border: 0.3rem solid var(--color-18);
    border-radius: 50%;
    background: var(--color-white);
    margin-top: -0.8rem;
    cursor: pointer;
  }

  /* Active thumb styles */
  input[type="range"]:active::-webkit-slider-thumb {
    background: var(--color-white);
  }

  /* Focus styles */
  input[type="range"]:focus {
    outline: none;
  }

  /* Active track styles */
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--color-white);
  }
`;
