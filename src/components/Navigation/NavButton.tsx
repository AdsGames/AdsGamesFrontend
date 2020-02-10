import React, { useState } from "react";

import { NavButtonIcon, NavButtonStyle, NavButtonText } from "./NavButton.style";

import { NavLink } from "../../constants/navLinks";

const NavButton: React.FC<NavLink> = ({ text, icon, hoverIcon }) => {
  const [hover, setHover] = useState(false);

  return (
    <NavButtonStyle onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <NavButtonIcon src={hover ? hoverIcon : icon} alt={text} />
      <NavButtonText>{text}</NavButtonText>
    </NavButtonStyle>
  );
};
export default NavButton;
