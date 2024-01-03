import { AllHTMLAttributes } from "react";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
}

export interface SelectProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
}
