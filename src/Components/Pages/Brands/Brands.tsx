import React from "react";
import { TopNav } from "Components/Molecules/TopNav";
import {
  CollaborationContainer,
  Header,
  HeroContainer,
  Section,
  SuccessStoryContainer,
} from "./style";
import Typography from "Components/Atoms/Typography";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";
import { TestiSection } from "Components/Organisms/TestiSection";
import { Footer } from "Components/Organisms/Footer";
import { SectionWithList } from "Components/Organisms/SectionWithList";
import { BramdAudienceSection } from "Components/Organisms/BramdAudienceSection";
import SimpleSection from "Components/Organisms/SimpleSection/SimpleSection";

// Type defination
interface Props {}

// Component
const Brands: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
      <Header>
        <HeroContainer>
          <Typography as="h3" className="h-11 mb-45">
            <>
              Dive into the <br /> Pop-tastic Universe
            </>
          </Typography>
          <Typography as="p" className="p-10 max-width-520 mb-70">
            Your brand's journey to captivating storytelling and unparalleled
            engagement begins here.
          </Typography>

          <Button className="btn btn-3">
            Join Now <ArrowRightIcon />
          </Button>
        </HeroContainer>
      </Header>

      <Section className="section__collaboration">
        <CollaborationContainer>
          <div>
            <div className="img-1-2-holder">
              <div className="img-1">
                <img src="/assets/images/collabo-img-1.png" alt="" />
              </div>
              <div className="img-2">
                <img src="/assets/images/collabo-img-2.png" alt="" />
              </div>
            </div>
            <Typography as="h4" className="h-17 max-width-627">
              Unlock the Power of Collaboration
            </Typography>
            <Typography as="p" className="p-15 max-width-520">
              At Popp'n, we understand the significance of authentic connections
            </Typography>
          </div>
          <div className="img-3-container">
            <div className="img-3">
              <img src="/assets/images/collabo-img-3.png" alt="" />
            </div>
          </div>
        </CollaborationContainer>
      </Section>

      <SimpleSection />
      <Section className="section__craft">
        <SuccessStoryContainer>
          <Typography as="h4" className="mt-60 h-13">
            <>
              Why Go{" "}
              {/* <img
                  src="/assets/images/poppn-gif.gif"
                  alt=""
                  className="image-text"
                /> */}
              <img
                src="/assets/images/poppn-logo-animation.gif"
                alt=""
                className="image-text"
              />{" "}
              for Your Campaigns
            </>
          </Typography>
          <Typography
            as="p"
            className="p-12 max-width-878 text-center mb-40 mt-30"
          >
            Popp'n offers you a transformative platform that connects you with a
            community of talented creators, propelling your brand towards
            success in the digital age.
          </Typography>
          <Button className="btn btn-3">
            Give it a try <ArrowRightIcon />
          </Button>
          <div className="img-container mt-55">
            <img src="/assets/images/campaigns.png" alt="" />
          </div>
        </SuccessStoryContainer>
      </Section>
      <SectionWithList listIndex={1} />
      <BramdAudienceSection />
      <TestiSection />
      <Footer />
    </>
  );
};

export default Brands;
