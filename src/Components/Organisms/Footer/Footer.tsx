import React from "react";
import { Container, FooterTop, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import FooterDown from "./FooterDown";

// Type defination
interface Props {}

// Component
const Footer: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Container>
        <FooterTop>
          <div className="image-container">
            <img src="/assets/images/footer-image.png" alt="" />
          </div>

          <Typography as="h5" className="mt-60 h-8">
            <>
              Join the{" "}
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
              Movement
            </>
          </Typography>

          <Typography
            as="p"
            className="text-center p-6 max-width-663 mt-20 mb-40"
          >
            Ready to be part of the future of creator marketing? Join Popp'n
            today and experience the power of genuine collaboration. Amplify
            your brand, connect with creators, and shape narratives that truly
            pop! 🎉
          </Typography>

          <Button className="btn btn-3 btn-3--color-1">
            Learn More <ArrowRightIcon />
          </Button>
        </FooterTop>
        <FooterDown />
      </Container>
    </Wrapper>
  );
};

export default Footer;
