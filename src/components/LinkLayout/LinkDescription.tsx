import React, { ReactNode } from "react";

import { StyledLinkDescription, LinkText } from "./LinkDescription.style";

export interface DescriptionProps {
  text: string;
}

const LinkDescription: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <StyledLinkDescription>
      <LinkText>{children}</LinkText>
    </StyledLinkDescription>
  );
};

export default LinkDescription;
