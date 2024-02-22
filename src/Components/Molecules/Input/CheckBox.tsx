import React from "react";
import { CheckBoxWrapper } from "./style";

// Type defination
interface Props {
  label?: string | JSX.Element;
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
        {label || (
          <span>
            I agree to the{" "}
            <span className="text-underline"> Terms of Service </span> and
            <span className="text-underline"> Privacy Policy</span>
          </span>
        )}
      </label>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
