import * as React from 'react'

import { StyledHeader, HeaderInner, HomepageLink, Logo } from './Header.style'

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <StyledHeader>
      <HeaderInner>
        <Logo />
        <HomepageLink to="/">{title}</HomepageLink>
      </HeaderInner>
    </StyledHeader>
  )
}
export default Header
