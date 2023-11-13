import React from "react";
import {
  Container,
  HeroImageContainer,
  Left,
  LeftCtas,
  Right,
  Wrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { PlayIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const Hero: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Container>
        <Left>
          <Typography as="h3" className="h-1 max-width-582">
            Empowering Brands & Creators:
          </Typography>
          <Typography as="h3" className="h-2">
            Redefining Marketing
          </Typography>

          <LeftCtas className="mt-100">
            <Button className="btn-1 b-3" value="Get a demo" />
            <Button className="btn-2 btn-play">
              <PlayIcon className="play-icon" />
              <span className="b-4">Play Demo</span>
            </Button>
          </LeftCtas>
        </Left>
        <Right>
          <HeroImageContainer>
            <div className="image image-1">
              <img src="assets/images/hero-1.png" alt="" />
            </div>
            <div className="image image-2">
              <img src="assets/images/hero-2.png" alt="" />
            </div>
            <div className="image image-3">
              <img src="assets/images/hero-3.png" alt="" />
            </div>
            <div className="image image-4">
              <img src="assets/images/hero-4.png" alt="" />
            </div>
            <div className="image image-5">
              <img src="assets/images/hero-5.png" alt="" />
            </div>
            <div className="image image-6">
              <img src="assets/images/hero-6.png" alt="" />
            </div>
            <div className="image image-7">
              <img src="assets/images/hero-7.png" alt="" />
            </div>
          </HeroImageContainer>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;
