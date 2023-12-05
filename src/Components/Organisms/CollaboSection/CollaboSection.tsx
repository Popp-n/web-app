import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const CollaboSection: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper className="section-rewarding">
      <Container>
        <div className="image-container">
          <img src="/assets/images/rewarding-collaboration.png" alt="" />
        </div>
        <div>
          <Typography as="h5" className="h-7" text="Rewarding Collaboration" />
          <Typography as="h5" className="p-5 max-width-480 mt-20 mb-50">
            Creators can earn money through branded content, contests, and
            challenges, fostering a mutually beneficial partnership that values
            talent and creativity.
          </Typography>

          <Button className="btn btn-3">
            Learn More <ArrowRightIcon />
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CollaboSection;
