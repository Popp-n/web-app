import React from "react";
import { CheckBoxWrapper } from "./style";

// Type defination
interface Props {}

// Component
const CheckBox: React.FC<Props> = () => {
  // Data to display
  return (
    <CheckBoxWrapper>
      <input type="checkbox" name="" id="name" className="element" />
      <label htmlFor="name">
        I agree to the Terms of Service and Privacy Policy
      </label>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
