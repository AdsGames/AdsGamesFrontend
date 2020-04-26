import styled from "styled-components";

export const LinkIconContainer = styled.div<{
  width?: number;
  color?: string;
}>`
  height: 100%;
  max-width: ${props => (props.width ? `{props.width}px` : "auto")};
  min-width: ${props => (props.width ? `{props.width}px` : "auto")};
  background-color: ${props => props.color};
`;

export const StyledLinkIcon = styled.img`
  width: 100%;
`;
