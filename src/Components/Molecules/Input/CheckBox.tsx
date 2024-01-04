import React from "react";
import { CheckBoxWrapper } from "./style";

// Type defination
interface Props {
  label?: string;
}

// Component
const CheckBox: React.FC<Props> = ({ label }) => {
  // Data to display
  return (
    <CheckBoxWrapper className={label ? "mt-0" : ""}>
      <input type="checkbox" name="" id="name" className="element" />
      <label htmlFor="name">
        {label || <>I agree to the Terms of Service and Privacy Policy</>}
      </label>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
