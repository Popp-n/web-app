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
    --color-6: #f5effb;
    --color-7: #797b89;
    --color-8: #0f0f14;
    --color-9: rgba(255, 0, 142, 0.1);
    --color-10: #1e1e1e;
    --color-11: #14183e;
    --color-12: #5e6282;
    --color-13: #f6f6f6;
    --color-14: #e5e5e5;
    --color-15: #39425d;
    --color-16: #d9d9d9;
    --color-17: #e6d6f4;
    --color-18: #cdaeea;
    --color-19: #4d4d4d;

    /* Shadows */
    --shadow-1: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    --shadow-2: 0px 1.5rem 3rem 0px rgba(223, 105, 81, 0.3);
    --shadow-3: 0px 0.5rem 2rem 0px rgba(223, 105, 81, 0.3);
    --shadow-4: 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
      0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
      0px 20px 13px 0px rgba(0, 0, 0, 0.01),
      0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
      0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
      0px 100px 80px 0px rgba(0, 0, 0, 0.02);
    --shadow-5: 0px 4px 61px 0px rgba(77, 71, 195, 0.2);

    /* Gradients */
    --gradient-1: linear-gradient(0deg, #f5effb 0%, #f5effb 100%), #fff;
    --gradient-2: linear-gradient(0deg, #ff008e 0%, #ff008e 100%), #fff;
    --gradient-3: linear-gradient(0deg, #612897 0%, #612897 100%), #fff;
    --gradient-4: linear-gradient(0deg, #000 0%, #000 100%), #fff;

    /* Layout variables */
    --max-row-width: 121.6rem;
    --max-row-width-sm: 95rem;
    --max-row-width-hero: 109.717rem;
    --max-row-width-testi: 102.717rem;
    --max-row-width-playground: 85.717rem;
    --max-row-width-challenge: 116.696rem;
    --max-row-width-onboard: 105.6rem;
    --center-extended-side-padding: 11remm;
  }
`;
