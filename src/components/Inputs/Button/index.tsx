import React from "react";

import { StyledButton } from "./Button.style";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ onClick, disabled }) => {
  return <StyledButton onClick={onClick} disabled={disabled} />;
};

export default Button;
