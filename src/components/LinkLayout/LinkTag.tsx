import React, { ReactNode } from "react";

import { StyledLinkTag } from "./LinkTag.style";

const LinkTag: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <StyledLinkTag>{children}</StyledLinkTag>;
};

export default LinkTag;
