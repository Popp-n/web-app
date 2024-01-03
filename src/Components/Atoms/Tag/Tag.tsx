import React, { useState } from "react";
import { Wrapper } from "./style";
import { TagProps } from "./types";
import Typography from "../Typography";

// Component
const Tag: React.FC<TagProps> = (props) => {
  // States
  const [selected, setSelected] = useState(false);

  //   Props
  const { label } = props;

  // Data to display
  return (
    <Wrapper
      onClick={() => setSelected(!selected)}
      className={selected ? "active" : ""}
    >
      <Typography as="span" text={label} />
    </Wrapper>
  );
};

export default Tag;
