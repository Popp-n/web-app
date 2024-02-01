import { AllHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  noMargin?: boolean;
  options?: object[];
}
export interface RadioProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
}

export interface SocialRadioProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  social: "Tiktok" | "Instagram" | "Youtube" | "Twitter";
}
export interface TypeRadioProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  icon?: JSX.Element;
  labelClassName?: string;
}
