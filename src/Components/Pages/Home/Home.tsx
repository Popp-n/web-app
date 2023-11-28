import React from "react";
import {
  Container,
  Section,
  Letters,
  AboutContainer,
  LeftImageContainer,
  AtPoppnContainer,
  PromotingSectionContainer,
  BrandAudContainer,
} from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import { Hero } from "Components/Molecules/Hero";
import Typography from "Components/Atoms/Typography";
import {
  ArrowRightIcon,
  FacebookBig,
  TiktokBig,
  TwitterBig,
  YoutubeBig,
} from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";

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

          <div className="down-section mt-45">
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
              <div className="down-section__right-image-2-container">
                <img src="assets/images/phone-1.png" alt="" className="img-1" />
                <img src="assets/images/phone-2.png" alt="" className="img-2" />
                <img src="assets/images/phone-3.png" alt="" className="img-3" />
                <img src="assets/images/phone-4.png" alt="" className="img-4" />
                <img src="assets/images/phone-5.png" alt="" className="img-5" />
                <img src="assets/images/phone-6.png" alt="" className="img-6" />
              </div>
            </div>
          </div>

          <div className="socials mt-20">
            <FacebookBig style={{ marginRight: "-2.1rem" }} />
            <TiktokBig style={{ marginRight: "-2.2rem" }} />
            <YoutubeBig style={{ marginRight: "-2rem" }} />
            <TwitterBig />
          </div>
        </AtPoppnContainer>
      </Section>

      <Section className="">
        <PromotingSectionContainer>
          <div className="left-container">
            <Typography as="h4" className="h-6 max-width-280">
              Promoting your Brand
            </Typography>
            <Typography as="p" className="p-4">
              Redefining Marketing
            </Typography>
          </div>
          <div className="image-container">
            <img src="/assets/images/promote-your-brand.png" alt="" />
          </div>
          <div className="right-container">
            <Typography as="h4" className="h-6 max-width-260">
              Elevating Creators Collaboration
            </Typography>
            <Typography as="p" className="p-4">
              The New Standard
            </Typography>
          </div>
          {/* <div></div>
          <div></div> */}
        </PromotingSectionContainer>
      </Section>

      <Section className="section-brand-audience">
        <BrandAudContainer>
          <div>
            <Typography as="h5" className="h-7" text="Brand Audience" />
            <Typography as="h5" className="p-5 max-width-520 mt-25 mb-50">
              From viral challenges to interactive contests, Popp'n's curated
              challenges push boundaries and drive engagement, giving your brand
              a competitive edge.
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
        </BrandAudContainer>
      </Section>
    </>
  );
};

export default Home;
