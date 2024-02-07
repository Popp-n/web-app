import {
  FlexColumnJcCenterAiCenter,
  FlexRowAiCenter,
  FlexRowAiStart,
  FlexRowJcBetweenAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
  border-radius: 1.2rem;
  overflow: hidden;
  background-color: var(--color-white);
  ${FlexRowJcBetweenAiCenter}
  width: 100%;

  &.no-margin {
    margin-bottom: 0;
  }

  &.is-password {
    padding-right: 2rem;
  }

  &.has-error {
    border-radius: 1.2rem 1.2rem 0 0;
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

  /* Style two */
  &.style-2 {
    border-radius: 1.2rem;
    border: 1px solid var(--color-28);
    background-color: #fff;

    .input-ele {
      &::placeholder {
        color: var(--color-22);
        font-family: Poppins;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-top: 2.6rem;

  .element {
    display: none;
  }

  .label {
    ${FlexRowAiStart}
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    color: var(--color-29);
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
    color: var(--color-white);
  }
`;

export const RadioWrapper = styled.div`
  margin-top: 2.6rem;

  .element {
    display: none;
  }

  label {
    ${FlexRowAiStart}
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    /* line-height: 150%; */
    color: var(--color-22);
    cursor: pointer;

    position: relative;
    padding-left: 2.6rem;

    &::before {
      ${GridCenter}
      /* margin-top: 0.4rem; */
      position: absolute;
      content: "";
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      left: 0;
      transition: 0.4s;
      font-size: 1rem;
      line-height: 0;
      color: var(--color-white);
      border: 0.2rem solid var(--color-1);
    }
  }

  &.boxed {
    label {
      &::before {
        border-radius: 0.4rem;
      }
    }
  }

  &.no-margin {
    margin-top: 0;
  }

  .element:checked + label::before {
    background-color: var(--color-1);
    content: "✔";
  }
`;

export const SocialRadioWrapper = styled.div`
  .element {
    display: none;
  }

  label {
    border-radius: 0.4rem;
    background-color: var(--color-27);

    ${FlexColumnJcCenterAiCenter}
    gap: 1rem;

    color: var(--color-22);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;

    position: relative;
    padding: 1.8rem 3rem;

    border-radius: 0.4rem;
    background: var(--color-27);

    transition: 0.4s;

    path {
      transition: 0.2s;
    }
  }

  .element:checked + label {
    background-color: var(--color-1);
    color: var(--color-white);

    path {
      fill: var(--color-white);
    }
  }
`;

export const TypeRadioWrapper = styled.div`
  .element {
    display: none;
  }

  label {
    border-radius: 0.4rem;
    background-color: var(--color-27);

    ${FlexRowAiCenter}
    gap: 1rem;

    color: var(--color-22);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    cursor: pointer;

    position: relative;
    padding: 0.8rem 2rem;

    border-radius: 2.5rem;
    background: var(--color-27);

    transition: 0.4s;

    path {
      transition: 0.2s;
    }
  }

  .element:checked + label {
    background-color: var(--color-1);
    color: var(--color-white);

    path {
      fill: var(--color-white);
    }

    &.label-icon {
      path {
        fill: none;
        stroke: var(--color-white);
      }
    }
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

// Select

export const SelectInputWrapper = styled.div`
  margin-bottom: 2rem;
`;
export const SelectWrapper = styled.div`
  border-radius: 1.2rem;
  overflow: hidden;
  background-color: var(--color-white);
  ${FlexRowJcBetweenAiCenter}

  width: 100%;
  padding-right: 2rem;
  cursor: pointer;

  &.no-margin {
    margin-bottom: 0;
  }

  .select-ele {
    flex-grow: 1;
    padding-inline: 2rem;
    padding-block: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-18);
    background-color: var(--color-white);

    &::placeholder {
      color: var(--color-18);
      font-family: Poppins;
      font-size: 1.5rem;
      font-weight: 400;
      padding-inline: 2rem;
      /* padding-block: 1.8rem; */
    }

    &:active,
    &:focus {
      outline: none;
    }
  }

  &.has-error {
    border-radius: 1.2rem 1.2rem 0 0;
  }

  /* Style two */
  &.style-2 {
    border-radius: 1.2rem;
    border: 1px solid var(--color-28);
    background-color: #fff;

    .input-ele {
      &::placeholder {
        color: var(--color-22);
        font-family: Poppins;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
  }
`;

const FormInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  &:not(:last-child) {
    /* margin-bottom: 1.6rem; */
  }
`;

export default FormInputGrid;

export const Dropdown = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 110%;
  width: 100%;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  padding: 2rem;
  z-index: 3;
  box-shadow: var(--shadow-4);
`;
