import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const BramdAudienceSection: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Container>
        <div className="brand-section__left">
          <Typography as="h5" className="h-7" text="Brand Audience" />
          <Typography as="h5" className="p-5 max-width-480 mt-20 mb-50">
            From viral challenges to interactive contests, Popp'n's curated
            challenges push boundaries and drive engagement, giving your brand a
            competitive edge.
          </Typography>

          <Button className="btn btn-3">
            Learn More <ArrowRightIcon />
          </Button>
        </div>
        <div className="right-image-container">
          {/* <img
              src="/assets/images/brand-audience-shadow.png"
              alt=""
              className="shadow"
            /> */}
          <img src="/assets/images/build-audience.png" alt="" className="img" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default BramdAudienceSection;
