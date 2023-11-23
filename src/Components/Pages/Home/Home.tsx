import React from "react";
import {
  Container,
  Section,
  Letters,
  AboutContainer,
  LeftImageContainer,
  AtPoppnContainer,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import { Hero } from "Components/Molecules/Hero";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const Home: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
      <Hero />
      <Section className="section-poppn">
        <Container>
          <Letters>
            <div className="letters-imgs-container">
              <div className="letters-img-container l-i-c-1">
                <img src="assets/images/poppn-p.png" alt="" />
              </div>
              <div className="letters-img-container l-i-c-2">
                <img src="assets/images/poppn-o.png" alt="" />
              </div>
              <div className="letters-img-container l-i-c-3">
                <img src="assets/images/poppn-p-2.png" alt="" />
              </div>
              <div className="letters-img-container l-i-c-4">
                <img src="assets/images/poppn-p-3.png" alt="" />
              </div>
              <div className="letters-img-container l-i-c-5">
                <img src="assets/images/poppn-quote.png" alt="" />
              </div>
              <div className="letters-img-container l-i-c-6">
                <img src="assets/images/poppn-n.png" alt="" />
              </div>
            </div>
          </Letters>
          <Typography as="h5" className="h-3 text-center mt-20">
            <>
              <span className="h-3--2">P</span>latform for{" "}
              <span className="h-3--2">O</span>
              ptimized <span className="h-3--2">P</span>
              artnerships and <span className="h-3--2">P</span>erformance in{" "}
              <span className="h-3--2">N</span>
              etworking
            </>
          </Typography>
        </Container>
      </Section>

      <Section className="section-about-poppn">
        <AboutContainer>
          <div className="left">
            <LeftImageContainer className="blue-1">
              <img src="/assets/images/poppn-blue-1.png" alt="" />
            </LeftImageContainer>
            <LeftImageContainer className="blue-2">
              <img src="/assets/images/poppn-blue-2.png" alt="" />
            </LeftImageContainer>
            <LeftImageContainer className="red-1">
              <img src="/assets/images/poppn-red-1.png" alt="" />
            </LeftImageContainer>
            <LeftImageContainer className="red-2">
              <img src="/assets/images/poppn-red-2.png" alt="" />
            </LeftImageContainer>
            <LeftImageContainer className="shadow-1">
              <img src="/assets/images/poppn-shadow-1.png" alt="" />
            </LeftImageContainer>
            <LeftImageContainer className="shadow-2">
              <img src="/assets/images/poppn-shadow-2.png" alt="" />
            </LeftImageContainer>
          </div>
          <div className="right">
            <Typography as="p" className="p-1 max-width-550">
              <>
                <img src="/assets/images/poppn-small-logo.png" alt="" /> is a
                social media collaboration platform that connects brands with
                creators for social media campaigns. It is a marketplace where
                brands can find and hire creators to create content, run
                contests, and collaborate on other projects. Creators can earn
                money by participating in challenges, creating branded content,
                and running contests.
              </>
            </Typography>
          </div>
        </AboutContainer>
      </Section>

      <Section className="section-at-poppn">
        <AtPoppnContainer>
          <Typography as="h3" className="h-4">
            <>
              At{" "}
              <img
                src="/assets/images/poppn-small-logo.png"
                alt=""
                className="logo"
              />
            </>
          </Typography>
          <Typography as="p" className="p-2 mt-10 max-width-878">
            We're redefining the landscape of authentic creator marketing. Our
            platform serves as a dynamic marketplace where brands and creators
            converge to craft compelling narratives, eye-catching content, and
            engaging campaigns that captivate audiences like never before.
          </Typography>
        </AtPoppnContainer>
      </Section>
    </>
  );
};

export default Home;
