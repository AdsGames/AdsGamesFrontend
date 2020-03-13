import React from "react";

import { StyledButton, ButtonText, StyledButtonContainer } from "./Button.style";

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ onClick, disabled, children }) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={onClick} disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
