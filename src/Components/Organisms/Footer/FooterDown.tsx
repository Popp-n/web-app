import React from "react";
import { FooterBottom } from "./style";
import {
  InstagramFooterIcon,
  Logo,
  TiktokFooterIcon,
  TwitterFooterIcon,
  YoutubeFooterIcon,
} from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const FooterDown: React.FC<Props> = () => {
  // Data to display
  return (
    <FooterBottom className="">
      <div className="left">
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
        <Typography as="p" className="p-7 text-center mt-10">
          Copyright © 2023 popp’n All rights reserved.
        </Typography>
      </div>
    </FooterBottom>
  );
};

export default FooterDown;
