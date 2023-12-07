import React from "react";

import { Header, HeroContainer, Section, SuccessStoryContainer } from "./style";

import { TopNav } from "Components/Molecules/TopNav";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import { Footer } from "Components/Organisms/Footer";
import { TestiSection } from "Components/Organisms/TestiSection";
import { CollaboSection } from "Components/Organisms/CollaboSection";
import { SectionWithList } from "Components/Organisms/SectionWithList";

// Type defination
interface Props {}

// Component
const Creators: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
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
        </HeroContainer>
      </Header>

      <Section className="section__craft">
        <SuccessStoryContainer>
          <Typography as="h4" className="h-13">
            Craft Your Success Story
          </Typography>
          <Typography as="p" className="p-12 max-width-590 text-center mb-40 mt-30">
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
    </>
  );
};

export default Creators;
