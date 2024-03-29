import React from "react";
import { RadioWrapper } from "./style";
import { RadioProps } from "./types";

// Component
const Radio: React.FC<RadioProps> = ({ label, name }) => {
  // Data to display
  return (
    <RadioWrapper>
      <input type="radio" name={name} id={label} className="element" />
      <label htmlFor={label}>{label}</label>
    </RadioWrapper>
  );
};

export default Radio;
