import React from "react";
import { Wrapper } from "./style";
import { Button } from "Components/Atoms/Button";
import { ModalCloseIcon } from "Components/Atoms/SvgIcons";
import { Overlay } from "Components/Atoms/Overlay";

// Type defination
interface Props {}

// Component
const Modal: React.FC<Props> = () => {
  // Data to display
  return (
    <Overlay>
      <Wrapper
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
      >
        <Button className="display-block ml-auto">
          <ModalCloseIcon />
        </Button>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
