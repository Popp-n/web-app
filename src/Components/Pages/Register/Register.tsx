import { OnboardingTemplate } from "Components/Templates/OnboardingTemplate";
import React, { useState } from "react";
import { Left, Right, Tags, TagsCta } from "./style";
import Typography from "Components/Atoms/Typography";
import { Range } from "Components/Molecules/Input";
import { Button } from "Components/Atoms/Button";
import { ArrowLeftIcon } from "Components/Atoms/SvgIcons";
import { Link } from "react-router-dom";
import { Tag } from "Components/Atoms/Tag";
import { AnimatePresence } from "framer-motion";
import { Modal } from "Components/Organisms/Modals";

// Type defination
interface Props {}

const allTag = [
  "animal",
  "animation & fan culture",
  "art & photography",
  "celebrity account",
  "comedy",
  "current events",
  "daily life",
  "dance",
  "family",
  "fashion & beauty",
  "fitness",
];

// Component
const Register: React.FC<Props> = () => {
  // States
  const [show, setShow] = useState(false);

  // Data to display
  return (
    <OnboardingTemplate>
      <>
        <Left>
          <Link to="/sign-up">
            <ArrowLeftIcon />
          </Link>
          <Typography
            as="h3"
            className="h-18 max-width-450"
            text="Select your area of interest"
          />

          <Typography
            as="p"
            className="p-16 mt-20"
            text="If you already have an account"
          />
          <Typography as="p" className="p-16 mt-5">
            <>
              You can <span className="p-17">Login here ! </span>
            </>
          </Typography>
        </Left>
        <Right>
          <Range className="mb-20" />

          <Tags>
            {allTag.map((t, i) => (
              <Tag key={i} label={t} />
            ))}
          </Tags>

          <TagsCta className="mt-60">
            <Button className="btn-5 b-6 btn-sm">Skip</Button>
            <Button className="btn-4 b-5 btn-sm" onClick={() => setShow(true)}>
              Next
            </Button>
          </TagsCta>
        </Right>

        <AnimatePresence>{show && <Modal />}</AnimatePresence>
      </>
    </OnboardingTemplate>
  );
};

export default Register;
