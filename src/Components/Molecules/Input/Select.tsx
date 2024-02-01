import React from "react";
import { SelectInputWrapper, SelecteWrapper } from "./style";
import { SelectProps } from "./types";

// Component
const Select: React.FC<SelectProps> = (props) => {
  // Props
  const { placeholder, className, label, name, options, ...otherProps } = props;

  // Data to display
  return (
    <SelectInputWrapper>
      {label && <label htmlFor={name}>{label}</label>}

      <SelecteWrapper className={className ? className : ""}>
        <select name={name} id={name} className={`input-ele`} {...otherProps}>
          <option value="">{placeholder ? placeholder : "Select"}</option>

          {options?.map((option: any) => (
            <option key={option.id} value={option.id || option.value}>
              {option.name || option.value}
            </option>
          ))}
        </select>
      </SelecteWrapper>
    </SelectInputWrapper>
  );
};

export default Select;
