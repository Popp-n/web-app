import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import React, { useState } from "react";
import { Left, Right, Social, Socials } from "./style";
import Typography from "Components/Atoms/Typography";
import { Range } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Modal } from "Components/Organisms/Modals";

// Type defination
interface Props {}

// const allTag = [
//   "animal",
//   "animation & fan culture",
//   "art & photography",
//   "celebrity account",
//   "comedy",
//   "current events",
//   "daily life",
//   "dance",
//   "family",
//   "fashion & beauty",
//   "fitness",
// ];

// Component
const RegisterSocials: React.FC<Props> = () => {
  // States
  const [show] = useState(false);

  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Link to="/sign-up">
            <ArrowLeftIcon className="back-icon" />
          </Link>
          <div className="heading-box">
            <Typography
              as="h3"
              className="h-18 max-width-500"
              text="Verify your socials"
            />

            <Typography as="p" className="p-16 mt-20 max-width-380 sub-heading">
              Verification could take up to 5-10 minutes Feel free to leave this
              page and check back later.
            </Typography>
          </div>
        </Left>
        <Right>
          <Range className="mb-20" />

          <Typography as="h5" className="h-21">
            Select each socials to verify
          </Typography>

          <Socials>
            <Social>
              <img src="/assets/images/tiktok-icon.png" alt="" />
            </Social>
            <Social>
              <img src="/assets/images/instagram-icon.png" alt="" />
            </Social>
            <Social>
              <img src="/assets/images/youtube-icon.png" alt="" />
            </Social>
            <Social>
              <img src="/assets/images/twitter-icon.png" alt="" />
            </Social>
          </Socials>

          <Typography as="h5" className="h-21">
            Select your primary handle
          </Typography>
          <Typography as="p" className="p-18 max-width-350">
            You have to verify atleast one social network to select a primary
            handle
          </Typography>

          {/* <SocialOptions>
            <Radio label="TikTok" name="social" />
            <Radio label="Instagram" name="social" />
            <Radio label="Youtube" name="social" />
            <Radio label="Twitter" name="social" />
          </SocialOptions> */}

          <Button className="btn-full btn-4 b-5 btn-md mt-100 ff">Next</Button>
        </Right>

        <AnimatePresence>{show && <Modal />}</AnimatePresence>
      </>
    </OnboardingTemplate>
  );
};

export default RegisterSocials;
