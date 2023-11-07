import { css } from "styled-components";

export const Variables = css`
  :root {
    /* Color variables */
    --color-white: #ffffff;
    --color-black: #000000;
    --color-primary: #fa3f4c;

    /* Other colors */
    --color-1: #202329;
    --color-2: #f9f9f9;
    --color-3: #bdbdbd;
    --color-4: #e0e0e0;
    --color-5: #e6e6e6;
    --color-6: #fabdaa;
    --color-7: #54a7f3;
    --color-8: #3ffaed;
    --color-9: #fff8f7;
    --color-10: #707581;
    --color-11: #56135a;
    --color-12: #c2c2c24e;
    --color-13: #11104d;
    --color-14: #7e1c84;
    --color-15: #7075817f;
    --color-16: #f3f3f7;
    --color-17: #8c8e98;
    --color-18: #e8e8e8;
    --color-19: #efefef;
    --color-20: #d0d0d0;

    /* Shadows */
    --shadow-1: 0 1rem 1.8rem 0.2rem rgba(0, 0, 0, 0.08);
    --shadow-2: 0px 2px 4px 0px rgba(48, 49, 51, 0.1),
      0px 0px 1px 0px rgba(48, 49, 51, 0.05);
    --shadow-3: 0.6rem 0.6rem 5.4rem 0 rgba(0, 0, 0, 0.05);
    --shadow-4: 0 0.5rem 2rem 0.1rem rgba(0, 0, 0, 0.06);

    /* Gradients */
    --gradient-1: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    --gradient-2: linear-gradient(
      82deg,
      #fa3f4c -2.11%,
      rgba(86, 19, 90, 0.75) 43.37%,
      rgba(84, 167, 243, 0.88) 96.22%
    );

    /* Layout variables */
    --max-row-width: 133rem;
    --max-row-width-slider: 122rem;
    --max-row-width-writeup: 98rem;
    --max-row-width-extended: 155rem;
    --center-extended-side-padding: 11remm;
  }
`;
