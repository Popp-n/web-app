import { responsive } from "Styles/Abstract/Breakpoints";
import styled from "styled-components";

export const Left = styled.div`
  .image-text {
    width: 12.1rem;
    height: 4rem;
    vertical-align: middle;
    border-radius: 1rem;
  }
`;
export const Right = styled.div`
  flex-basis: 37rem;

  ${responsive("sm", "flex-basis: auto; width: 100%")}
`;
