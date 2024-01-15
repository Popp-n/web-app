import React from "react";
import { CheckBoxWrapper } from "./style";

// Type defination
interface Props {
  label?: string;
  isOneLine?: boolean;
}

// Component
const CheckBox: React.FC<Props> = ({ label, isOneLine }) => {
  // Data to display
  return (
    <CheckBoxWrapper
      className={`${label ? "mt-0" : ""} ${isOneLine ? "one-line" : ""}`}
    >
      <input type="checkbox" name="" id="name" className="element" />
      <label htmlFor="name" className="label">
        {label || <>I agree to the Terms of Service and Privacy Policy</>}
      </label>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
