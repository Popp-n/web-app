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

export const CenterSm = styled(Center)`
  max-width: var(--max-row-width-sm);
`;

export const CenterTesti = styled(Center)`
  max-width: var(--max-row-width-testi);
`;

export const CenterPlayground = styled(Center)`
  max-width: var(--max-row-width-playground);
`;
export const CenterChallenge = styled(Center)`
  max-width: var(--max-row-width-challenge);
`;
export const CenterOnboard = styled(Center)`
  max-width: var(--max-row-width-onboard);
`;

export const CenterHero = styled(Center)`
  max-width: var(--max-row-width-hero);
`;
