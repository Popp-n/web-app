import React from "react";
import { Wrapper } from "./style";
import { InputProps } from "./types";
import { EyeIcon } from "Components/Atoms/SvgIcons";

// Component
const Input: React.FC<InputProps> = (props) => {
  // Props
  const {
    noMargin,
    className,
    placeholder,
    type = "text",
    ...otherProps
  } = props;
  // Data to display
  return (
    <Wrapper
      className={`${className} ${noMargin ? "no-margin" : ""} ${
        type === "password" ? "is-password" : ""
      }`}
    >
      <input
        {...otherProps}
        type={type}
        className="input-ele"
        placeholder={placeholder || ""}
      />
      {type === "password" && <EyeIcon />}
    </Wrapper>
  );
};

export default Input;
