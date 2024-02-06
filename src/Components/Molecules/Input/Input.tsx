import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { InputFieldWrapper, Wrapper } from "./style";
import { InputProps } from "./types";
import { EyeIcon } from "Components/Atoms/SvgIcons";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";

// Component
const Input: React.FC<InputProps> = (props) => {
  // State
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Props
  const {
    noMargin,
    className,
    placeholder,
    type = "text",
    errorMessage,
    ...otherProps
  } = props;
  // Data to display
  return (
    <InputFieldWrapper>
      <Wrapper
        className={`${className} ${noMargin ? "no-margin" : ""} ${
          type === "password" ? "is-password" : ""
        } ${errorMessage ? "has-error" : ""} `}
      >
        <input
          {...otherProps}
          type={showPassword ? "text" : type}
          className="input-ele"
          placeholder={placeholder || ""}
        />
        {type === "password" && (
          <EyeIcon
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </Wrapper>
      <AnimatePresence>
        {errorMessage && <ErrorMessage label={errorMessage} />}
      </AnimatePresence>
    </InputFieldWrapper>
  );
};

export default Input;
