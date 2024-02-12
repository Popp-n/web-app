import { responsive } from "Styles/Abstract/Breakpoints";
import {
  FlexColumn,
  FlexColumnJcCenterAiCenter,
  FlexRowJcBetweenAiCenter,
  ImageDefault,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-block: 5rem;
`;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
  gap: 7rem;

  .image-container {
    max-width: 55.9rem;
    max-height: 53.42rem;

    img {
      ${ImageDefault}
    }
  }

  .section-texts__collabo {
    ${responsive("sm", `${FlexColumnJcCenterAiCenter}; text-align: center;`)}
  }

  ${responsive("sm", `${FlexColumn}; flex-direction: column-reverse`)}
`;
