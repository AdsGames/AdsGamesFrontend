import { transparentize } from "polished";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Container from "../Container";
import { heights, dimensions, colors } from "../../styles/variables";

import logoShadow from "../../images/logo-shadow.svg";

export const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`;

export const Logo = styled.div`
  background: url(${logoShadow});
  background-size: 100% 100%;
  height: 80px;
  width: 380px;
`;

export const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;
