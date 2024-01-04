import { AllHTMLAttributes } from "react";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
}

export interface SelectProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
}
export interface RadioProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}
