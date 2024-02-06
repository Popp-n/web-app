import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: any;
}
const Button: React.FC<Props> = (props) => {
  const { children, className, value, type = "button" } = props;
  return (
    <ButtonStyle type={type} className={className} {...props}>
      {value || children}
    </ButtonStyle>
  );
};

export default Button;
