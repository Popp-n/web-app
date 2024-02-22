import { AllHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  noMargin?: boolean;
  errorMessage?: string;
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  noMargin?: boolean;
  options?: object[];
  errorMessage?: string;
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

export interface CustomeFileTwoProps extends AllHTMLAttributes<HTMLDivElement> {
  label?: string;
  required?: boolean;
  pattern?: string;
  accept?: string;
  name?: string;
  wrapperClassName?: string;
  mediaType?: "image" | "video";
}
