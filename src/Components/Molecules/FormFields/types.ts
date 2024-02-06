import { TextareaHTMLAttributes } from "react";

export interface FormFieldProps {
  children?: any;
  onSubmit?: any;
  validationSchema?: any;
  initialValues: any;
  setFormValues?: (values: any) => void;
  getFormikProps?: (props: any) => void;
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: any;
  value?: any;
  label?: any;
  type?: string;
  noMargin?: boolean;
  errorMessage?: any;
}
export interface SwitchFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  setActive?: () => void;
  name: string;
}

export interface CustomFileFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: any;
  value?: any;
  label?: any;
  type?: string;
  btnLabel?: string;
  getFile?: (data: any) => void;
  fileUrl?: any;
  fileType?: "media" | "single";
}
export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name?: any;
  value?: any;
  label?: any;

  noMargin?: boolean;
  errorMessage?: any;
  options: Array<{}>;
  optionKey?: string;
  optionValue?: string;
}

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: any;
  label?: string;
  noMargin?: boolean;
  errorMessage?: any;
}
