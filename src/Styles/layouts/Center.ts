import styled from "styled-components";
import { responsive } from "../Abstract/Breakpoints";

export const Center = styled.section`
  max-width: var(--max-row-width);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("lg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterExtended = styled(Center)`
  max-width: var(--max-row-width-extended);
`;

export const CenterHero = styled(Center)`
  max-width: var(--max-row-width-hero);
`;
