import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const SimpleSection: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper className="section__discover">
      <Container>
        <div className="left">
          <img src="/assets/images/amp-brand.png" alt="" />

          {/* <DiscoverImageContainer className="discover-1">
            <img src="/assets/images/brands-1.png" alt="" />
          </DiscoverImageContainer>
          <DiscoverImageContainer className="discover-2">
            <img src="/assets/images/brands-2.png" alt="" />
          </DiscoverImageContainer>
          <DiscoverImageContainer className="shadow-1">
            <img src="/assets/images/poppn-shadow-1.png" alt="" />
          </DiscoverImageContainer>
          <DiscoverImageContainer className="shadow-2">
            <img src="/assets/images/poppn-shadow-2.png" alt="" />
          </DiscoverImageContainer> */}
        </div>
        <div className="right">
          <Typography as="h3" className="h-14">
            Amplify Your Brand🔥
          </Typography>
          <Typography as="p" className="p-13 mt-20 max-width-550">
            Elevate your brand's presence in the digital realm by partnering
            with Popp'n. Discover the power of collaborative marketing, creative
            synergy, and campaigns that truly pop!
          </Typography>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SimpleSection;
