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
          <Typography as="p" className="p-2 mt-10 max-width-750">
            We're redefining the landscape of authentic creator marketing. Our
            platform serves as a dynamic marketplace where brands and creators
            converge to craft compelling narratives, eye-catching content, and
            engaging campaigns that captivate audiences like never before.
          </Typography>

          <div className="down-section mt-80">
            <div className="down-section__left">
              <div className="down-section__content">
                <Typography as="p" className="h-5 flex-shrink-0">
                  ✨
                </Typography>
                <div>
                  <Typography as="p" className="h-5">
                    Vibrant Collaborative Hub:
                  </Typography>
                  <Typography as="p" className="p-3 max-width-480 mt-10">
                    Popp'n is your one-stop hub for unlocking the potential of
                    collaborative genius. Our interconnected speech bubbles
                    symbolize the conversations, ideas, and partnerships that
                    flourish here, forming a circular dance of innovation.
                  </Typography>
                </div>
              </div>
              <div className="down-section__content mt-70">
                <Typography as="p" className="h-5 flex-shrink-0">
                  💡
                </Typography>
                <div>
                  <Typography as="p" className="h-5">
                    Inspiration Meets Strategy:
                  </Typography>
                  <Typography as="p" className="p-3 max-width-480 mt-10">
                    Collaborate seamlessly with creators to infuse fresh
                    perspectives into your campaigns. Our platform bridges
                    inspiration and strategy, delivering content that resonates
                    deeply with your audience.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="down-section__right">
              <div className="down-section__right-image-container">
                <img src="assets/images/at-poppn-img-1.png" alt="" />
              </div>
              <div className="down-section__right-image-2-container"></div>
            </div>
          </div>
        </AtPoppnContainer>
      </Section>
    </>
  );
};

export default Home;
