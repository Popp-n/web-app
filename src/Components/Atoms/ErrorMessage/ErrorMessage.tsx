import React, { AllHTMLAttributes } from "react";
import { Wrapper } from "./style";
import { InputErrorIcon } from "../SvgIcons";

// Type defination
interface Props extends AllHTMLAttributes<HTMLSpanElement> {
  label?: string;
}

// Component
const ErrorMessage: React.FC<Props> = ({ label, className }) => {
  // Data to display
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={className}
    >
      <InputErrorIcon width={20} height={20} />
      {label}
    </Wrapper>
  );
};

export default ErrorMessage;
