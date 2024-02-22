import React from "react";
import "react-quill/dist/quill.snow.css";
import { PageStyle, SetPaymentWrapper, TotalPay } from "./style";
import Typography from "Components/Atoms/Typography";
import { CheckBox } from "Components/Molecules/Input";
import { BtnIcon } from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {}

// Component
const SetPayment: React.FC<Props> = () => {
  // Data to display
  return (
    <PageStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SetPaymentWrapper>
        <Typography as="h3" className="h-39">
          Proceed to Payment
        </Typography>

        <Typography as="h5" className="h-40 mt-30">
          Budget amount: N200,000
        </Typography>

        <TotalPay className="mt-70 mb-30">
          <Typography as="h4" className="h-41">
            Total Payment
          </Typography>
          <Typography as="h4" className="h-41">
            N200,000
          </Typography>
        </TotalPay>

        <CheckBox
          isOneLine
          label={
            <span className="checkbox-label">
              I’ve read and agreed to{" "}
              <span className="text-underline checkbox-label--dark">
                {" "}
                Self Service Challenge Agreement{" "}
              </span>{" "}
            </span>
          }
        />
      </SetPaymentWrapper>

      <Flex className="mt-50" $gap="1rem" $flexRowAiCenter>
        <Button className="next-cta prev mt-30">
          <BtnIcon />
          Setup Challenge
        </Button>
        <Button className="next-cta next mt-30">
          Make Payment
          <BtnIcon />
        </Button>
      </Flex>
    </PageStyle>
  );
};

export default SetPayment;
