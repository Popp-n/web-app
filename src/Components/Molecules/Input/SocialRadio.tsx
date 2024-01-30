import React from "react";
import { SocialRadioWrapper } from "./style";
import { SocialRadioProps } from "./types";
import {
  InstagramRadioIcon,
  TiktokRadioIcon,
  TwitterRadioIcon,
  YoutubeRadioIcon,
} from "Components/Atoms/SvgIcons";

// Type
const socialTypes = {
  Tiktok: { icon: <TiktokRadioIcon />, label: "Tiktok" },
  Instagram: { icon: <InstagramRadioIcon />, label: "Instagram" },
  Youtube: { icon: <YoutubeRadioIcon />, label: "Youtube" },
  Twitter: { icon: <TwitterRadioIcon />, label: "Twitter" },
};

// Component
const SocialRadio: React.FC<SocialRadioProps> = ({
  label,
  name,
  social,
  ...otherProps
}) => {
  // Type
  const selectedSocial = socialTypes[social];

  // Data to display
  return (
    <SocialRadioWrapper {...otherProps}>
      <input type="radio" name={name} id={label} className="element" />
      <label htmlFor={label}>
        {selectedSocial.icon}
        <span>{selectedSocial.label}</span>
      </label>
    </SocialRadioWrapper>
  );
};

export default SocialRadio;
