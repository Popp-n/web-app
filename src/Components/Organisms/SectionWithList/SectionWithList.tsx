import React from "react";
import { Container, Left, Right, Section } from "./style";
import Typography from "Components/Atoms/Typography";

const lists = [
  [
    {
      icon: "💡",
      heading: "Challenges that Propel:",
      subHeading:
        "Engage in innovative challenges that push your creativity to new heights. Win hearts, recognition, and rewards while showcasing your capabilities.",
    },
    {
      icon: "🎉",
      heading: "Your Creative Playground:",
      subHeading:
        "Explore a world of inspiration, from collaborating with brands you admire to expressing your creativity in ways that were once beyond your imagination.",
    },
    {
      icon: "🌟",
      heading: "Network and Thrive:",
      subHeading:
        "Connect with fellow creators, expand your horizons, and grow your reach within a supportive community that understands the essence of authentic creativity.",
    },
  ],
  [
    {
      icon: "💡",
      heading: "ROI on Fleek:",
      subHeading:
        "Popp'n isn't just about creativity; it's about boosting your brand's ROI. Get ready to see the numbers pop – in the best way possible!",
    },
    {
      icon: "🎉",
      heading: "Authentic Impact:",
      subHeading:
        "Your brand's authenticity is your superpower, and Popp'n creators are experts at translating it into campaigns that resonate with your audience on a profound level.",
    },
    {
      icon: "🌟",
      heading: "Buzz-Generating Contests:",
      subHeading:
        "Our interactive contests are engineered to captivate your audience, generate buzz, and turn your brand into the talk of the digital town.",
    },
  ],
];

// Type defination
interface Props {
  listIndex: number;
}

// Component
const SectionWithList: React.FC<Props> = ({ listIndex }) => {
  // Data to display
  return (
    <Section>
      <Container>
        <Left>
          {lists[listIndex].map((list, index) => (
            <div key={index} className="content">
              <Typography as="h6" text={list.icon} className="h-12" />
              <div>
                <Typography as="h5" className="h-12">
                  {list.heading}
                </Typography>
                <Typography as="p" className="p-11 max-width-481 mt-15">
                  {list.subHeading}
                </Typography>
              </div>
            </div>
          ))}
        </Left>
        <Right>
          <div className="gif-container">
            {listIndex === 0 ? (
              <img src="/assets/images/poppn-list-section.gif" alt="" />
            ) : (
              <img src="/assets/images/poppn-list-section-2.gif" alt="" />
            )}
          </div>
          <div className="socials">
            <img src="/assets/images/list-section-socials.png" alt="" />
          </div>
        </Right>
      </Container>
    </Section>
  );
};

export default SectionWithList;
