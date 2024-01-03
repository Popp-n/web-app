import { AllHTMLAttributes } from "react";

export interface TagProps extends AllHTMLAttributes<HTMLButtonElement> {
  label: string;
}
