import React from "react";
import { SelectWrapper, SelectInputWrapper } from "./style";
import { SelectProps } from "./types";
import { AnimatePresence } from "framer-motion";
import { ErrorMessage } from "Components/Atoms/ErrorMessage";

// Component
const Select: React.FC<SelectProps> = (props) => {
  // Props
  const {
    placeholder,
    className,
    label,
    name,
    options,
    errorMessage,
    ...otherProps
  } = props;

  // Data to display
  return (
    <SelectInputWrapper>
      <SelectWrapper
        className={`${className ? className : ""} ${
          errorMessage ? "has-error" : ""
        }`}
      >
        <select name={name} id={name} className={`select-ele`} {...otherProps}>
          <option value="">{placeholder ? placeholder : "Select"}</option>

          {options?.map((option: any) => (
            <option key={option.id} value={option.id || option.value}>
              {option.name || option.value}
            </option>
          ))}
        </select>
      </SelectWrapper>
      <AnimatePresence>
        {errorMessage && <ErrorMessage label={errorMessage} />}
      </AnimatePresence>
    </SelectInputWrapper>
  );
};

export default Select;
