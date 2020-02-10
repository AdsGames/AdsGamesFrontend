import React from "react";

import { StyledContentHeader } from "./ContentHeader.style";

const ContentHeader: React.FC<{ text: string }> = ({ text }) => {
  return <StyledContentHeader>{text}</StyledContentHeader>;
};

export default ContentHeader;
