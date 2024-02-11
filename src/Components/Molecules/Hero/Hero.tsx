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
          <Typography as="h3" className="h-1 max-width-582 center-on-xmd-vp">
            Empowering Brands & Creators:
          </Typography>
          <Typography as="h3" className="h-2 center-on-xmd-vp">
            Redefining Marketing
          </Typography>

          <LeftCtas className="mt-100 remove-on-xmd-vp">
            <Button className="btn-1 b-3" value="Get a demo" />
            <Button className="btn-2 btn-play">
              <PlayIcon className="play-icon" />
              <span className="b-4">Play Demo</span>
            </Button>
          </LeftCtas>
        </Left>
        <Right>
          <HeroImageContainer>
            <img src="/assets/images/hero-right-pic.png" alt="" />
          </HeroImageContainer>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;
