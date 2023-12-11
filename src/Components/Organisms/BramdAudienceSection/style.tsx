import { FlexRowJcBetweenAiCenter, ImageDefault } from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-block: 7rem;
`;

export const Container = styled(Center)`
  border-radius: 2.56rem;
  background: var(--color-6);
  padding-inline: 8rem;
  padding-right: 0;
  ${FlexRowJcBetweenAiCenter}
  gap: 5rem;

  .right-image-container {
    position: relative;
    height: 58.9rem;

    .img {
      ${ImageDefault}
    }

    .shadow {
      position: absolute;
      width: 35.4rem;
      height: 36.7rem;
      right: 0;
    }
  }
`;
