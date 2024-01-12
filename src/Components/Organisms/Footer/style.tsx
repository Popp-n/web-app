import {
  FlexColumnJcCenterAiCenter,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcEndAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: var(--color-9);
  padding-block: 3.5rem;
`;

export const Container = styled(Center)``;

export const FooterTop = styled.div`
  ${FlexColumnJcCenterAiCenter}

  .image-container {
    width: 402.457px;
    height: 270px;

    img {
      ${ImageDefault}
    }
  }

  .image-text {
    width: 12.1rem;
    height: 4.654rem;
    vertical-align: middle;
    border-radius: 1rem;
  }
`;
export const FooterBottom = styled.div`
  background-color: var(--color-9);
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;

  .left {
  }
  .right {
  }
  .footer-links {
    ${FlexRowAiCenter}
    gap: 3.2rem
  }
  .footer-icons {
    ${FlexRowJcEndAiCenter}
    gap: 2.4rem;
  }
`;
