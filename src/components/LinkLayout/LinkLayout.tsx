import React, { ReactNode } from "react";

import { StyledLinkLayout } from "./LinkLayout.style";

const LinkLayout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <StyledLinkLayout>{children}</StyledLinkLayout>;
};

export default LinkLayout;
