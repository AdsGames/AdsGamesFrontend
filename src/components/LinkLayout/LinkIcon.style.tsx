import styled from "styled-components";

export const LinkIconContainer = styled.div`
  height: 100%;
  max-width: 192px;
  min-width: 192px;
  background-color: ${props => props.color};
`;

export const StyledLinkIcon = styled.img`
  max-height: ${props => props.height}
  min-height: ${props => props.height}
  width: 100%;
`;
