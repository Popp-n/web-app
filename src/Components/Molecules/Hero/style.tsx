import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import { CenterHero } from "Styles/layouts/Center";

export const Wrapper = styled.header`
  background-image: url("assets/images/circles-bg.svg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 81.3rem 61.3rem;
  padding-bottom: 5rem;
`;

export const Container = styled(CenterHero)`
  ${FlexRowAiCenter}
  gap: 1rem;
`;

export const Left = styled.div`
  padding-top: 10rem;
`;

export const LeftCtas = styled.div`
  /* padding-top: 13rem; */
  ${FlexRowAiCenter}
  gap: 5rem;

  .btn-play {
    .play-icon {
      box-shadow: var(--shadow-2);
      transition: 0.4s;
    }

    &:hover {
      .play-icon {
        box-shadow: var(--shadow-3);
      }
    }

    &:active {
      .play-icon {
        transform: translateY(0.3rem);
      }
    }
  }
`;

export const Right = styled.div`
  /* flex-basis: 50%; */
  padding-top: 5rem;
`;

export const HeroImageContainer = styled.div`
  width: 51.517rem;
  height: 54.7rem;
  /* background-color: grey; */

  position: relative;

  .image {
    position: absolute;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .image-1 {
    left: 5.9rem;
    width: 23.9rem;
    height: 25.5745rem;

    z-index: 6;
  }
  .image-2 {
    width: 18.6rem;
    height: 22.8rem;
    left: 2.7rem;
    bottom: 4.1rem;
  }
  .image-3 {
    width: 26.1rem;
    height: 44.8rem;
    top: 9.9rem;
    right: 0.917rem;
  }
  .image-4 {
    width: 83.173px;
    height: 89px;
    top: 5.7rem;
    right: 0.4rem;
    z-index: 5;

    box-shadow: 0px 4.28916px 49.3253px 0px rgba(201, 63, 61, 0.1);
    border-radius: 40.262px 41.586px 0 41.586px;
  }
  .image-5 {
    width: 83.173px;
    height: 89px;
    right: 0;
    bottom: 9rem;

    box-shadow: 0px 4.28916px 49.3253px 0px rgba(0, 0, 0, 0.1);
    border-radius: 40.262px 0px 41.586px 41.586px;
  }
  .image-6 {
    width: 77.565px;
    height: 83px;
    left: 15.5rem;
    bottom: 0.7rem;

    box-shadow: 0px 4px 46px 0px rgba(29, 161, 242, 0.1);
    border-radius: 37.548px 0px 38.783px 38.783px;
  }
  .image-7 {
    width: 77.565px;
    height: 83px;
    top: 11.2rem;
    z-index: 7;

    box-shadow: 0px 4px 46px 0px rgba(29, 161, 242, 0.1);
    border-radius: 37.548px 0px 38.783px 38.783px;
  }
`;
