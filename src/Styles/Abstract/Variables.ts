import { css } from "styled-components";

export const Variables = css`
  :root {
    /* Fonts */
    --font-primary: "Montserrat", sans-serif;
    --font-1: "Poppins", sans-serif;

    /* Color variables */
    --color-white: #ffffff;
    --color-black: #000000;
    --color-primary: #612897;

    /* Other colors */
    --color-1: #ff008e;
    --color-2: #667085;
    --color-3: #344054;
    --color-4: #686d77;

    /* Shadows */
    --shadow-1: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-2: 0px 1.5rem 3rem 0px rgba(223, 105, 81, 0.3);
    --shadow-3: 0px 0.5rem 2rem 0px rgba(223, 105, 81, 0.3);

    /* Gradients */
    --gradient-1: linear-gradient(
      180deg,
      #fff 43.72%,
      rgba(255, 255, 255, 0) 66.23%
    );

    /* Layout variables */
    --max-row-width: 133rem;
    --max-row-width-hero: 120rem;
    --center-extended-side-padding: 11remm;
  }
`;
