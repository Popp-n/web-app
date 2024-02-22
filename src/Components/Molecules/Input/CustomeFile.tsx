import React, { useState } from "react";
import { CustomeFileField } from "./style";
import { ThumbnailIcon, VideoFileIcon } from "Components/Atoms/SvgIcons";
import { CustomeFileTwoProps } from "./types";
import { Button } from "Components/Atoms/Button";

const CustomeFile: React.FC<CustomeFileTwoProps> = (props) => {
  // States
  const [fileName, setFileName] = useState<string>("");

  //   Props
  const { required, accept, name, wrapperClassName, placeholder, mediaType } =
    props;

  //   Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setFileName(target?.files![0].name);
  };
  return (
    <CustomeFileField className={wrapperClassName ? wrapperClassName : ""}>
      <div className="icon-instruction">
        {mediaType === "video" ? (
          <VideoFileIcon width={24} height={20} />
        ) : (
          <ThumbnailIcon width={18} height={18} />
        )}

        <span className="file-name">
          {placeholder ? (
            placeholder
          ) : (
            <>
              This image will be used to represent your challenge on Poppin.
              Recommended size: 1080 x 1080 px, Max 2mb{" "}
            </>
          )}
        </span>
      </div>
      <div className="custom-input-container">
        <Button className="mx-auto display-block file-cta mt-30">
          Select file
        </Button>
        <span className="file-name file-name--2 mt-10 text-center">
          {fileName || "[ File name here ]"}
        </span>
      </div>
      <input
        type="file"
        className="file-input"
        required={required}
        onChange={handleChange}
        accept={accept}
        name={name}
      />
    </CustomeFileField>
  );
};

export default CustomeFile;
