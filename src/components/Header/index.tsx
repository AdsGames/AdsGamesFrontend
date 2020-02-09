import * as React from "react";

import Navigation from "../Navigation";

import { StyledHeader, HeaderInner, HomepageLink, Logo } from "./Header.style";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <StyledHeader>
      <Navigation />
      <HeaderInner>
        <Logo />
        <HomepageLink to="/">{title}</HomepageLink>
      </HeaderInner>
    </StyledHeader>
  );
};
export default Header;
