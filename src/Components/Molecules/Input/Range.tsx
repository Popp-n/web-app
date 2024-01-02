import React from "react";
import { RangeStyle } from "./style";
import { InputProps } from "./types";
import { EyeIcon } from "Components/Atoms/SvgIcons";

// Component
const Range: React.FC<InputProps> = (props) => {
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
    <RangeStyle className={`${className} `}>
      <input {...otherProps} type="range" className="input-ele" />
      {type === "password" && <EyeIcon />}
    </RangeStyle>
  );
};

export default Range;
