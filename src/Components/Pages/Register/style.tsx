import { Button } from "Components/Atoms/Button";
import { FlexRowWrap } from "Styles/Abstract/Mixins";
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
  flex-basis: 46.4rem;
`;

export const Tags = styled.div`
  ${FlexRowWrap}
  gap: 1.2rem;
`;

export const TagsCta = styled.div`
  ${FlexRowWrap}
  gap: 1.2rem;
`;
