import { responsive } from "Styles/Abstract/Breakpoints";
import { FlexRowWrap } from "Styles/Abstract/Mixins";
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
  }
`;

export const Right = styled.div`
  flex-basis: 46.4rem;

  ${responsive("sm", "flex-basis: auto; width: 100%")}
`;

export const Tags = styled.div`
  ${FlexRowWrap}
  gap: 1.2rem;
`;

export const TagsCta = styled.div`
  ${FlexRowWrap}
  gap: 1.2rem;
`;
