import { FlexRow, FlexRowJcCenter } from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";
import styled from "styled-components";

export const Section = styled.section`
  &.section-poppn {
    background: linear-gradient(0deg, #f5effb 0%, #f5effb 100%), #fff;
    padding-block: 15rem;
  }
`;

export const Container = styled(Center)``;

export const Letters = styled.div`
  /* padding-block: 15rem; */
  ${FlexRowJcCenter}

  .letters-imgs-container {
    position: relative;
    width: 1068.651px;
    height: 304.844px;
    flex-shrink: 0;
  }

  .letters-img-container {
    position: absolute;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .l-i-c-1 {
    width: 225.703px;
    height: 271.608px;
    top: 33.24px;
    left: 0;
  }
  .l-i-c-2 {
    width: 225.703px;
    height: 187.448px;
    top: 33.24px;
    left: 171.27px;
    z-index: 1;
  }
  .l-i-c-3 {
    width: 225.703px;
    height: 271.608px;
    top: 33.24px;
    left: 342.37px;
  }
  .l-i-c-4 {
    width: 259.703px;
    height: 305.608px;
    top: 33.24px;
    left: 523.6px;
    z-index: 1;
  }
  .l-i-c-5 {
    width: 70.511px;
    height: 111.642px;
    top: 0;
    left: 736.47px;
  }
  .l-i-c-6 {
    width: 204.096px;
    height: 256.306px;
    top: 48.54px;
    left: 784.56px;
    z-index: 1;
  }
`;
