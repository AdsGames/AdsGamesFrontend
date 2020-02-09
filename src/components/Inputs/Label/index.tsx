import * as React from "react";

import { StyledLabel } from "./Label.style";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Button;
