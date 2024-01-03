import React, { useRef, useState } from "react";
import { Dropdown, SelectInputWrapper, SelecteWrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { CaretIcon } from "Components/Atoms/SvgIcons";
import { SelectProps } from "./types";
import { AnimatePresence } from "framer-motion";
import { animate_slideUp } from "Styles/Base/Animation";
import useOnClickOutside from "Utils/Hooks/useOnClickOutside";

// Component
const Select: React.FC<SelectProps> = (props) => {
  // States
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Refs
  const dropdownRef = useRef<any>();

  // Hooks
  useOnClickOutside(dropdownRef, () => setShowDropdown(false));

  // Props
  const { placeholder } = props;

  // Data to display
  return (
    <SelectInputWrapper>
      <SelecteWrapper
        ref={dropdownRef}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {value ? (
          <Typography as="h5" className="input-ele" text={value || " "} />
        ) : (
          <Typography as="h5" className="placeholder" text={placeholder} />
        )}
        <CaretIcon />
      </SelecteWrapper>

      <AnimatePresence>
        {showDropdown && (
          <Dropdown
            variants={animate_slideUp.variants}
            exit={animate_slideUp.variants.hidden}
            transition={animate_slideUp.transition}
            initial="hidden"
            animate={showDropdown ? "visible" : "hidden"}
          ></Dropdown>
        )}
      </AnimatePresence>
    </SelectInputWrapper>
  );
};

export default Select;
