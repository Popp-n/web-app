import React from "react";
import { FooterBottom, Container, FooterTop, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import {
  ArrowRightIcon,
  InstagramFooterIcon,
  Logo,
  TiktokFooterIcon,
  TwitterFooterIcon,
  YoutubeFooterIcon,
} from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";

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
        <FooterBottom className="mt-65">
          <div>
            <Logo />
            <div className="footer-links mt-5">
              <Link to="/" className="l-2">
                PRIVACY POLICY
              </Link>
              <Link to="/" className="l-2">
                TERMS OF USE
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="footer-icons">
              <TiktokFooterIcon />
              <InstagramFooterIcon />
              <YoutubeFooterIcon />
              <TwitterFooterIcon />
            </div>
            <Typography as="p" className="p-7 mt-10">
              Copyright © 2023 popp’n All rights reserved.
            </Typography>
          </div>
        </FooterBottom>
      </Container>
    </Wrapper>
  );
};

export default Footer;
