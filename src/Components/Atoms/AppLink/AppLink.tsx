import React from "react";
import { Link } from "react-router-dom";

// Type defination
interface Props {
  label?: string;
  className?: string;
  to: string;
  children?: any;
}

// Component
const AppLink: React.FC<Props> = (props) => {
  // Props
  const { className = "l-1", label, to, children } = props;
  // Data to display
  return (
    <Link to={to} className={`l ${className}`}>
      {label || children}
    </Link>
  );
};

export default AppLink;
