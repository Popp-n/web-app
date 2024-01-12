import { FlexColumn } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Left = styled.div`
  align-self: flex-start;
  padding-top: 10rem;

  .image-text {
    width: 12.1rem;
    height: 4rem;
    vertical-align: middle;
    border-radius: 1rem;
  }
`;
export const Right = styled.div`
  flex-basis: 37rem;
`;

export const GoalsBox = styled.div`
  padding-left: 1.5rem;
  ${FlexColumn};
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
