import {
  FlexRow,
  FlexRowAiCenter,
  FlexRowWrap,
  ImageDefault,
} from "Styles/Abstract/Mixins";
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
  flex-basis: 38rem;
`;

export const Socials = styled.div`
  ${FlexRow}
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
`;

export const Social = styled.button`
  all: unset;
  width: 87px;
  height: 87px;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  img {
    ${ImageDefault}
  }
`;

export const SocialOptions = styled.div`
  ${FlexRowAiCenter}
  gap: 2rem;
`;
