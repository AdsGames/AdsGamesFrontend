import styled from "styled-components";

export const LinkIconContainer = styled.div`
  height: 100%;
  max-width: ${props => props.width};
  min-width: ${props => props.width};
  background-color: ${props => props.color};
`;

export const StyledLinkIcon = styled.img`
  max-height: ${props => props.height}
  min-height: ${props => props.height}
  width: 100%;
`;
