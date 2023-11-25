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
    --color-5: #0e0e0e;

    /* Shadows */
    --shadow-1: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-2: 0px 1.5rem 3rem 0px rgba(223, 105, 81, 0.3);
    --shadow-3: 0px 0.5rem 2rem 0px rgba(223, 105, 81, 0.3);

    /* Gradients */
    --gradient-1: linear-gradient(0deg, #f5effb 0%, #f5effb 100%), #fff;
    --gradient-2: linear-gradient(0deg, #ff008e 0%, #ff008e 100%), #fff;

    /* Layout variables */
    --max-row-width: 121.6rem;
    --max-row-width-sm: 95rem;
    --max-row-width-hero: 109.717rem;
    --center-extended-side-padding: 11remm;
  }
`;
