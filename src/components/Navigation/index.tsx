import * as React from "react";

import { NavContainer, NavButtonIcon, NavButton, NavButtonText } from "./Navigation.style";

import { NAV_LINKS } from "../../constants/navLinks";

const Header: React.FC = () => {
  return (
    <NavContainer>
      {NAV_LINKS.map(({ text, icon, hoverIcon }) => (
        <NavButton>
          <NavButtonIcon src={hoverIcon || icon} alt={text} />
          <NavButtonText>{text}</NavButtonText>
        </NavButton>
      ))}
    </NavContainer>
  );
};
export default Header;
