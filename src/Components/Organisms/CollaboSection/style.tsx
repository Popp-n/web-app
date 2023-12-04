import { Container } from "Components/Pages/Creators/style";
import { FlexRowJcBetweenAiCenter, ImageDefault } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding-block: 5rem;
`;

export const RewardingSectionContainer = styled(Container)`
  ${FlexRowJcBetweenAiCenter}
  gap: 7rem;

  .image-container {
    width: 55.9rem;
    height: 53.42rem;

    img {
      ${ImageDefault}
    }
  }
`;
