import React from "react";
import {
  Person,
  TestiCard,
  TestiCards,
  Conatiner,
  TestimonialToggle,
  Wrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";
import { Button } from "Components/Atoms/Button";
import {
  TestiCaretDownIcon,
  TestiCaretUpIcon,
} from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const TestiSection: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Conatiner>
        <div className="flex-shrink-0 left">
          <Typography as="h3" className="h-9 max-width-344">
            <>
              What <span className="h-9--color-1">Creators</span> &{" "}
              <span className="h-9--color-primary">Brand</span> say about Us.
            </>
          </Typography>

          <div className="left__togglers">
            <div className="left__toggler active"></div>
            <div className="left__toggler"></div>
            <div className="left__toggler"></div>
          </div>
        </div>
        <div className="test-container">
          <img
            src="/assets/images/testi-right-bg.png"
            alt=""
            className="shadow-bg"
          />

          <TestiCards>
            <TestiCard className="active">
              <Person>
                <img src="/assets/images/testi.png" alt="" className="" />
              </Person>
              <Typography as="p" className="p-8 max-width-410">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </Typography>
              <div>
                <Typography as="h6" className="h-10">
                  Mike Adegoke
                </Typography>
                <Typography as="p" className="p-9 mt-5">
                  CEo, Beatz Company
                </Typography>
              </div>
            </TestiCard>
            <TestiCard className="inactive">
              <Person>
                <img src="/assets/images/testi.png" alt="" className="" />
              </Person>
              <Typography as="p" className="p-8 max-width-410">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </Typography>
              <div>
                <Typography as="h6" className="h-10">
                  Chris J. Basit
                </Typography>
                <Typography as="p" className="p-9 mt-5">
                  CEO of ABC Company
                </Typography>
              </div>
            </TestiCard>
            {/* <TestimonialToggle className="remove-on-sm-vp">
              <Button>
                <TestiCaretUpIcon height={9} width={11} />
              </Button>
              <Button>
                <TestiCaretDownIcon height={9} width={11} />
              </Button>
            </TestimonialToggle> */}
          </TestiCards>

          <TestimonialToggle>
            <Button>
              <TestiCaretUpIcon height={9} width={11} className="icon-mobile-left" />
            </Button>
            <Button>
              <TestiCaretDownIcon height={9} width={11} className="icon-mobile-right" />
            </Button>
          </TestimonialToggle>
        </div>
      </Conatiner>
    </Wrapper>
  );
};

export default TestiSection;
