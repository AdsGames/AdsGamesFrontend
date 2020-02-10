import * as React from "react";

import { NavContainer } from "./Navigation.style";
import NavButton from "./NavButton";

import { NAV_LINKS } from "../../constants/navLinks";

const Header: React.FC = () => {
  return (
    <NavContainer>
      {NAV_LINKS.map(({ text, icon, hoverIcon }) => (
        <NavButton text={text} icon={icon} hoverIcon={hoverIcon} />
      ))}
    </NavContainer>
  );
};
export default Header;
