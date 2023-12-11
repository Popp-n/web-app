import React from "react";
import { TopNav } from "Components/Molecules/TopNav";
import { Header, HeroContainer } from "./style";
import Typography from "Components/Atoms/Typography";
import { ArrowRightIcon } from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const Brands: React.FC<Props> = () => {
  // Data to display
  return (
    <>
      <TopNav />
      <Header>
        <HeroContainer>
          <Typography as="h3" className="h-11 mb-45">
            <>
              Dive into the <br /> Pop-tastic Universe
            </>
          </Typography>
          <Typography as="p" className="p-10 max-width-520 mb-70">
            Your brand's journey to captivating storytelling and unparalleled
            engagement begins here.
          </Typography>

          <Button className="btn btn-3">
            Join Now <ArrowRightIcon />
          </Button>
        </HeroContainer>
      </Header>
    </>
  );
};

export default Brands;
