import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  PageStyle,
  PreviewChallengeBox,
  ProvideDetailsFormWrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";
import { CustomeFile, Input, Radio } from "Components/Molecules/Input";
import { BtnIcon, ThumbnailIcon } from "Components/Atoms/SvgIcons";
import { Button } from "Components/Atoms/Button";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {}

// Component
const ProvideDetailsPage: React.FC<Props> = () => {
  // States
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  // Data to display
  return (
    <PageStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Typography as="p" className="p-23 mt-5 max-width-400">
        <>
          Challenges with simpler requirements receive the highest participation
          rates! <span className="p-23--heavy"> Learn more</span>
        </>
      </Typography>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Do you want to use specific hashtags? (add up to 5)
      </Typography>
      <ProvideDetailsFormWrapper>
        <div className="options mb-15">
          <Radio label="Yes" name="hashtags" className="no-margin" />
          <Radio label="No" name="hashtags" className="no-margin" />
        </div>
        <Input
          placeholder="Separate by  a comma, ex: #pear"
          className="style-2"
        />
      </ProvideDetailsFormWrapper>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Do you want creators to use a specific caption?
      </Typography>
      <ProvideDetailsFormWrapper>
        <div className="options mb-15">
          <Radio label="Yes " name="caption" className="no-margin" />
          <Radio label="No " name="caption" className="no-margin" />
        </div>
        <Input
          placeholder="Ex: Caption must say “Download Poppin today"
          className="style-2"
        />
      </ProvideDetailsFormWrapper>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Should creators tag other accounts? (add up to 5)
      </Typography>
      <ProvideDetailsFormWrapper>
        <div className="options mb-15">
          <Radio label="Yes  " name="accounts" className="no-margin" />
          <Radio label="No  " name="accounts" className="no-margin" />
        </div>
        <Input
          placeholder="Separate by a comma, ex: @pear, @pop"
          className="style-2"
        />
      </ProvideDetailsFormWrapper>

      <Typography as="h6" className="h-33 mt-40 mb-20">
        Do you want to require a minimum video length? (in seconds)
      </Typography>
      <ProvideDetailsFormWrapper>
        <div className="options mb-15">
          <Radio label="Yes   " name="length" className="no-margin" />
          <Radio label="No   " name="length" className="no-margin" />
        </div>
        <Input placeholder="Minimum" className="style-2" />

        <Typography as="p" className="p-23 mt-60 mb-60">
          <>
            Creators must agree to our{" "}
            <span className="p-23--heavy"> challenge rules</span> to participate
            in this challenge
          </>
        </Typography>

        <Typography
          as="h4"
          className="h-37 mt-30 mb-20"
          text="Provide Details"
        />

        <Typography as="p" className="p-23 max-width-481">
          <>
            Create the description for your challenge here. This information
            will help our creators decide if they want to participate in your
            challenge. <span className="p-23--heavy"> Learn more</span>
          </>
        </Typography>

        <Typography
          as="h6"
          className="h-33 mt-40 mb-10"
          text="Challenge Name"
        />
        <Input placeholder="Minimum" className="style-2" />

        <Typography as="h6" className="h-33 mt-40 mb-10" text="Brand Intro" />
        <ReactQuill
          theme="snow"
          value={value}
          style={{ height: "17rem", marginBottom: "9rem" }}
          onChange={setValue}
          placeholder="ex; Brand Name is excited to announce the groundbreaking new product Name changing the way you shop, stream, and play games online!"
        />

        <Typography
          as="h6"
          className="h-33 mt-40 mb-10"
          text="Creative Direction"
        />
        <ReactQuill
          theme="snow"
          value={value1}
          style={{ height: "17rem" }}
          onChange={setValue1}
          placeholder="ex: Play the song attached to this challenge while dancing in the same manner as the example video."
        />

        <Typography
          as="h4"
          className="h-37 mt-100 mb-20"
          text="Upload Assets"
        />

        <Typography as="p" className="p-23 max-width-430">
          <>
            Upload some visual assets to support your challenge listing.
            <span className="p-23--heavy"> See some samples</span>
          </>
        </Typography>

        <Typography
          as="h6"
          className="h-33 mt-40 mb-10"
          text="Challenge Thumbnail"
        />
        <Input placeholder="ex; Product Name Challenge" className="style-2" />

        <Typography
          as="h6"
          className="h-33 mt-40 mb-10"
          text="Challenge Thumbnail"
        />
        <CustomeFile accept="image/*" />

        <Typography as="h6" className="h-33 mt-40 mb-10">
          <>
            Example Video <span className="p-25">Optional</span>
          </>
        </Typography>
        <CustomeFile
          mediaType="video"
          accept="video/*"
          placeholder="Recommended size: 720x1280 px or higher, Max 1 GB (optional)"
        />

        <PreviewChallengeBox className="mt-50">
          <div className="placeholder-wrapper">
            <div>
              <ThumbnailIcon width={18} height={18} />
            </div>
            <div>
              <Typography as="h6" className="h-38" text="Preview Challange" />
              <span className="placeholder">
                Click here to view a preview of your challenge in a new tab
              </span>
            </div>
          </div>

          <Button className="mx-auto display-block preview-cta mt-30">
            Preview
          </Button>
        </PreviewChallengeBox>

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
      </ProvideDetailsFormWrapper>
    </PageStyle>
  );
};

export default ProvideDetailsPage;
