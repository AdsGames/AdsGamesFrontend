import React, { ReactNode } from "react";

import { StyledLinkTagLayout } from "./LinkTagLayout.style";

const LinkTagLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <StyledLinkTagLayout>{children}</StyledLinkTagLayout>;
};

export default LinkTagLayout;
