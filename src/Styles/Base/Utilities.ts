import { css } from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Utilities = css`
  /* Margins */
  /* margin top and bottom */
  .my-80 {
    --margin-value: 8rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  .my-50 {
    --margin-value: 5rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  .my-30 {
    --margin-value: 3rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  /* End of margin top and bottom */

  /* margin autos */
  .ml-auto {
    margin-left: auto;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-auto {
    margin-top: auto;
  }
  /* End of margin autos */

  /* margin tops */
  .mt-120 {
    margin-top: 12rem;
  }
  .mt-100 {
    margin-top: 10rem;
  }
  .mt-90 {
    margin-top: 9rem;
  }
  .mt-80 {
    margin-top: 8rem;
  }
  .mt-77 {
    margin-top: 7.7rem;
  }
  .mt-70 {
    margin-top: 7rem;
  }
  .mt-65 {
    margin-top: 6.5rem;
  }
  .mt-60 {
    margin-top: 6rem;
  }
  .mt-55 {
    margin-top: 5.5rem;
  }
  .mt-50 {
    margin-top: 5rem;
  }
  .mt-45 {
    margin-top: 4.5rem;
  }
  .mt-42 {
    margin-top: 4.2rem;
  }
  .mt-40 {
    margin-top: 4rem;
  }
  .mt-37 {
    margin-top: 3.7rem;
  }
  .mt-35 {
    margin-top: 3.5rem;
  }
  .mt-32 {
    margin-top: 3.2rem;
  }
  .mt-30 {
    margin-top: 3rem;
  }
  .mt-25 {
    margin-top: 2.5rem;
  }
  .mt-22 {
    margin-top: 2.2rem;
  }
  .mt-20 {
    margin-top: 2rem;
  }
  .mt-18 {
    margin-top: 1.8rem;
  }
  .mt-15 {
    margin-top: 1.5rem;
  }
  .mt-12 {
    margin-top: 1.2rem;
  }
  .mt-10 {
    margin-top: 1rem;
  }
  .mt-8 {
    margin-top: 0.8rem;
  }
  .mt-5 {
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 0.3rem;
  }
  .mt-0 {
    margin-top: 0rem;
  }
  /* End of margin tops */

  /* margin Bottoms */
  .mb-120 {
    margin-bottom: 12rem;
  }
  .mb-100 {
    margin-bottom: 10rem;
  }
  .mb-80 {
    margin-bottom: 8rem;
  }
  .mb-70 {
    margin-bottom: 7rem;
  }
  .mb-60 {
    margin-bottom: 6rem;
  }
  .mb-50 {
    margin-bottom: 5rem;

    &--sm-20 {
      margin-bottom: 2rem;
    }
  }
  .mb-45 {
    margin-bottom: 4.5rem;
  }
  .mb-40 {
    margin-bottom: 4rem;
  }
  .mb-35 {
    margin-bottom: 3.5rem;
  }
  .mb-30 {
    margin-bottom: 3rem;
  }
  .mb-25 {
    margin-bottom: 2.5rem;
  }
  .mb-20 {
    margin-bottom: 2rem;
  }
  .mb-16 {
    margin-bottom: 1.6rem;
  }
  .mb-15 {
    margin-bottom: 1.5rem;
  }
  .mb-10 {
    margin-bottom: 1rem;
  }
  /* End of margin Bottoms */

  /* margin left */
  .ml-40 {
    margin-left: 4rem;
  }
  .ml-30 {
    margin-left: 3rem;
  }
  .ml-10 {
    margin-left: 1rem;
  }
  /* End of margin left */

  /* margin right */
  .mr-40 {
    margin-right: 4rem;
  }
  /* End of margin right */

  /* Paddings */

  .pr-30 {
    padding-right: 3rem;
  }
  .pr-7 {
    padding-right: 0.7rem;
  }

  /* End of Paddings */

  /* Texts */
  .textCenter {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-capitalize {
    text-transform: capitalize;
  }
  .text-italic {
    font-style: italic;
  }
  .text-decoration-none {
    text-decoration: none;
  }
  .text-underline {
    text-decoration: underline;
  }
  .text-line-through {
    text-decoration: line-through;
  }
  /* End of Texts */

  /* Displays */
  .display-inline-block {
    display: inline-block;
  }
  .display-none {
    display: none !important;
  }
  .display-block {
    display: block;
  }
  .display-flex {
    display: flex;
  }
  .flex-row-ai-center {
    ${FlexRowAiCenter}
  }
  .flex-start {
    justify-content: flex-start;
    align-self: flex-start;
  }
  .flex-center {
    justify-content: center;
    align-self: center;
  }
  .flex-end {
    justify-content: flex-end;
    align-self: flex-end;
  }
  .flex-align-start {
    align-self: flex-start;
  }
  .flex-align-end {
    align-self: flex-end;
  }
  .flex-j-end {
    justify-content: flex-end;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .flex-grow-1 {
    flex-grow: 1;
  }

  .gap-8 {
    gap: 0.8rem;
  }
  /* End of Displays */

  /* Colors */
  .fill-color-11 {
    fill: var(--color-11);
  }

  .color-white {
    color: var(--color-white);
  }

  .color-10 {
    color: var(--color-10);
  }
  /* End of colors */

  /* Text Widths */
  .max-width-1150 {
    max-width: 115rem;
  }
  .max-width-1100 {
    max-width: 110rem;
  }
  .max-width-1000 {
    max-width: 100rem;
  }
  .max-width-992 {
    max-width: 99.2rem;
  }
  .max-width-878 {
    max-width: 87.8rem;
  }
  .max-width-830 {
    max-width: 83rem;
  }
  .max-width-750 {
    max-width: 75rem;
  }
  .max-width-720 {
    max-width: 72rem;
  }
  .max-width-700 {
    max-width: 70rem;
  }
  .max-width-690 {
    max-width: 69rem;
  }
  .max-width-663 {
    max-width: 66.3rem;
  }
  .max-width-630 {
    max-width: 63rem;
  }
  .max-width-627 {
    max-width: 62.7rem;
  }
  .max-width-590 {
    max-width: 59rem;
  }
  .max-width-582 {
    max-width: 58.2rem;
  }
  .max-width-580 {
    max-width: 58rem;
  }
  .max-width-570 {
    max-width: 57rem;
  }
  .max-width-550 {
    max-width: 55rem;
  }
  .max-width-520 {
    max-width: 52rem;
  }
  .max-width-510 {
    max-width: 51rem;
  }
  .max-width-481 {
    max-width: 48.1rem;
  }
  .max-width-480 {
    max-width: 48rem;
  }
  .max-width-450 {
    max-width: 45rem;
  }
  .max-width-430 {
    max-width: 43rem;
  }
  .max-width-420 {
    max-width: 42rem;
  }
  .max-width-410 {
    max-width: 41rem;
  }
  .max-width-400 {
    max-width: 40rem;
  }
  .max-width-380 {
    max-width: 38rem;
  }
  .max-width-350 {
    max-width: 35rem;
  }
  .max-width-344 {
    max-width: 34.4rem;
  }
  .max-width-280 {
    max-width: 28rem;
  }
  .max-width-260 {
    max-width: 26rem;
  }
  .max-width-220px,
  .max-width-220 {
    max-width: 22rem;
  }
  .max-width-195 {
    max-width: 19.5rem;
  }
  .max-width-120 {
    max-width: 12rem;
  }
  /* End of Text Widths */

  .width-full {
    width: 100%;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .show-only-first {
    & > * {
      display: none;
      &:first-child {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
