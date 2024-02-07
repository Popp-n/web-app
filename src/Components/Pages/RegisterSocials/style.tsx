import { responsive } from "Styles/Abstract/Breakpoints";
import {
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

  ${responsive(
    "sm",
    "display: flex; justify-content: space-between; width: 100%; margin-top: -4rem"
  )}

  .back-icon {
    ${responsive("sm", "width: 3rem; height: 3rem; margin-top: 1.5rem;")}
  }
  .heading-box {
    ${responsive("sm", "flex-grow: 1; text-align: -webkit-center;")}

    .sub-heading {
      ${responsive("sm", "width: 100%;")}
    }
  }
`;

export const Right = styled.div`
  flex-basis: 38rem;

  ${responsive("sm", "flex-basis: auto; width: 100%")}
`;

export const Socials = styled.div`
  ${FlexRowWrap}
  gap: 1rem;
  margin-top: 2.5rem;
  margin-bottom: 5rem;
`;

export const Social = styled.button`
  all: unset;
  width: 8.7rem;
  height: 8.7rem;
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
