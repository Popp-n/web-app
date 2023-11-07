import styled from "styled-components";
import { responsive } from "../Abstract/Breakpoints";

export const Center = styled.section`
  max-width: var(--max-row-width);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("lg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterSlider = styled.section`
  max-width: var(--max-row-width-slider);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("lg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterWriteup = styled.section`
  max-width: var(--max-row-width-writeup);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("lg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterExtended = styled(Center)`
  max-width: var(--max-row-width-extended);
`;
