import React from "react";
import { TypeRadioWrapper } from "./style";
import { TypeRadioProps } from "./types";

// Component
const TypeRadio: React.FC<TypeRadioProps> = ({
  label,
  name,
  icon,
  labelClassName,
  ...otherProps
}) => {
  // Data to display
  return (
    <TypeRadioWrapper {...otherProps}>
      <input type="radio" name={name} id={label} className="element" />
      <label htmlFor={label} className={labelClassName ? labelClassName : ""}>
        {icon && icon}
        <span>{label}</span>
      </label>
    </TypeRadioWrapper>
  );
};

export default TypeRadio;
