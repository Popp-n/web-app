import React from "react";

import {
  ChallengeContainer,
  DiscoverContainer,
  Header,
  HeroContainer,
  Section,
  SuccessStoryContainer,
} from "./style";

import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import { Footer } from "Components/Organisms/Footer";
import { TestiSection } from "Components/Organisms/TestiSection";
import { CollaboSection } from "Components/Organisms/CollaboSection";
import { SectionWithList } from "Components/Organisms/SectionWithList";
import { SlideFadePageAnimation } from "Components/Templates/PageAnimation";

// Type defination
interface Props {}

// Component
const Creators: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
      <SlideFadePageAnimation>
        <Header>
          <HeroContainer>
            <Typography as="h3" className="h-11 max-width-550 mb-45">
              Say goodbye to generic content.
            </Typography>
            <Typography as="p" className="p-10 max-width-520 mb-70">
              We connect you with brands that understand your authenticity and
              want your unique voice to shine through in their campaigns.
            </Typography>

            <Button className="btn btn-3">
              Join Now <ArrowRightIcon />
            </Button>

            <div className="hero__image-container display-on-sm-vp">
              <img src="/assets/images/creators-mobile-hero-img.png" alt="" />
            </div>
          </HeroContainer>
        </Header>

        <Section className="section__challenge">
          <ChallengeContainer>
            <Typography
              as="h5"
              className="h-15 text-right pr-30 section__label"
            >
              CREATE A CHALLENGE
            </Typography>
            <div className="image-container-1">
              <img src="/assets/images/challenge-1.png" alt="" />
            </div>
            <div className="image-container-2">
              <img src="/assets/images/challenge-2.png" alt="" />
            </div>
            <div className="trending-container">
              <div className="remove-on-md-vp">
                <Typography as="h3" className="h-16">
                  TRENDING
                </Typography>
                <Typography as="p" className="p-14 max-width-195 mt-37">
                  Discover a new world of fashion with elegant, thoughtful
                  combinations of beautiful design and quality materials.
                </Typography>
              </div>
              <div className="trending-image-container">
                <img src="/assets/images/challenge-3.png" alt="" />
              </div>
            </div>
          </ChallengeContainer>
        </Section>

        <Section className="section__discover">
          <DiscoverContainer>
            <div className="left">
              <img src="/assets/images/discover-popnn.png" alt="" />
              {/* <DiscoverImageContainer className="discover-1"> 
                <img src="/assets/images/poppn-discover-2.png" alt="" />
              </DiscoverImageContainer>
              <DiscoverImageContainer className="discover-2">
                <img src="/assets/images/poppn-discover-1.png" alt="" />
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
                Discover Your Canvas
              </Typography>
              <Typography as="p" className="p-13 mt-20 max-width-550">
                At Popp'n, we celebrate creators of all kinds. Whether you're a
                trend-setting influencer, a visionary artist, a wordsmith with a
                way with words, or any unique combination of talents, this is
                where your creativity finds its stage.
              </Typography>
            </div>
          </DiscoverContainer>
        </Section>

        <Section className="section__craft">
          <SuccessStoryContainer>
            <Typography as="h4" className="h-13 text-center">
              Craft Your Success Story
            </Typography>
            <Typography
              as="p"
              className="p-12 max-width-590 text-center mb-40 mt-30"
            >
              Dive into a diverse ecosystem of brands eager to collaborate and
              bring your creative vision to life.
            </Typography>
            <Button className="btn btn-3">
              Join Now <ArrowRightIcon />
            </Button>
            <div className="img-container mt-55">
              <img src="/assets/images/craft-img.png" alt="" />
            </div>
          </SuccessStoryContainer>
        </Section>

        <SectionWithList listIndex={0} />
        <CollaboSection />
        <TestiSection />
        <Footer />
      </SlideFadePageAnimation>
    </>
  );
};

export default Creators;
