import React from "react";
import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import { Left, Right } from "./style";
import Typography from "Components/Atoms/Typography";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";
import { AboutYouForm } from "Components/Organisms/Forms";

// Type defination
interface Props {}

// Component
const AboutYou: React.FC<Props> = () => {
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
              className="h-18 max-width-350 center-on-sm-vp"
              text="Tell us about yourself"
            />
          </div>

          <Typography
            as="p"
            className="p-16 mt-20 remove-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 remove-on-sm-vp">
            <>
              You can{" "}
              <Link to="/login" className="p-17">
                Login here !{" "}
              </Link>
            </>
          </Typography>
        </Left>
        <Right>
          <AboutYouForm />

          <Typography
            as="p"
            className="p-16 mt-40 text-center display-on-sm-vp"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5 text-center display-on-sm-vp">
            <>
              You can{" "}
              <Link to="/login" className="l p-17">
                Login here !{" "}
              </Link>
            </>
          </Typography>
        </Right>
      </>
    </OnboardingTemplate>
  );
};

export default AboutYou;
