import React from "react";
import { Container, Section, Letters } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import { Hero } from "Components/Molecules/Hero";

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
        </Container>
      </Section>
    </>
  );
};

export default Home;
