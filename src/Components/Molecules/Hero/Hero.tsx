import React from "react";
import { Container, Left, LeftCtas, Right, Wrapper } from "./style";
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
            <Button className="">
              <PlayIcon className="play-icon" />
            </Button>
          </LeftCtas>
        </Left>
        <Right></Right>
      </Container>
    </Wrapper>
  );
};

export default Hero;
