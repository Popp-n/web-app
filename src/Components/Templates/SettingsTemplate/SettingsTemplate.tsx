import React, { AllHTMLAttributes, useState } from "react";
import { DashboardTopNav } from "Components/Molecules/TopNav";
import { Body, Container, Left, NavItem, Navs, Right } from "./style";
import { Link, Outlet } from "react-router-dom";
import Typography from "Components/Atoms/Typography";
import { AnimatePresence } from "framer-motion";
import { settngsNavs, supportNavs } from "./sidenavs";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {}

// Component
const SettingsTemplate: React.FC<Props> = () => {
  // State
  const [active, setActive] = useState(0);

  // Data to display
  return (
    <>
      <DashboardTopNav />
      <Body>
        <Container>
          <Left>
            <Navs>
              <Typography as="h4" className="mb-10" text="Settings" />
              {settngsNavs.map((tab, index) => (
                <Link key={index} to={tab.path} className="l">
                  <NavItem
                    className={active === index ? "" : ""}
                    onClick={() => setActive(index)}
                  >
                    {tab.icon}
                    <Typography as="p" className="p-22" text={tab.label} />
                  </NavItem>
                </Link>
              ))}

              <Typography as="h4" className="mt-50 mb-10" text="Support" />
              {supportNavs.map((tab, index) => (
                <Link key={index} to={tab.path} className="l">
                  <NavItem
                    className={active === index ? "" : ""}
                    onClick={() => setActive(index)}
                  >
                    {tab.icon}
                    <Typography as="p" className="p-22" text={tab.label} />
                  </NavItem>
                </Link>
              ))}
            </Navs>
          </Left>
          <Right>
            <AnimatePresence>
              <Outlet />
            </AnimatePresence>
          </Right>
        </Container>
      </Body>
    </>
  );
};

export default SettingsTemplate;
