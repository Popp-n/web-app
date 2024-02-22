import {
  ContactIcon,
  DocumentTextIcon,
  FaqIcon,
  LogiutIcon,
  TermsIcon,
  TwoProfileUserIcon,
  UserProfileIcon,
  UserWalletIcon,
  WorldIcon,
} from "Components/Atoms/SvgIcons";

export const settngsNavs = [
  {
    icon: <UserProfileIcon />,
    label: "Personal Info & Account setting",
    path: "/settings/personal-info",
  },
  {
    icon: <TwoProfileUserIcon />,
    label: "Edit Poppn Profile",
    path: "/settings/#",
  },
  {
    icon: <DocumentTextIcon />,
    label: "Edit Brand Profile",
    path: "/settings/edit-brand-profile",
  },
  { icon: <UserWalletIcon />, label: "Earnings", path: "/settings/#" },
  {
    icon: <WorldIcon />,
    label: "Manage Socials",
    path: "/settings/manage-socials",
  },
];

export const supportNavs = [
  { icon: <ContactIcon />, label: "Contact Usg", path: "/settings/#" },
  { icon: <FaqIcon />, label: "FAQs", path: "/settings/#" },
  { icon: <TermsIcon />, label: "Terms of Usee", path: "/settings/#" },
  { icon: <DocumentTextIcon />, label: "Privacy Policy", path: "/settings/#" },
  { icon: <LogiutIcon />, label: "Log Out", path: "/settings/#" },
];
