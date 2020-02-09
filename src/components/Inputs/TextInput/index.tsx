import * as React from "react";

import Label from "../Label";

import { StyledInput } from "./Input.style";

const Button: React.FC<React.HTMLProps<HTMLInputElement> & { label: string }> = ({ label, ...props }) => {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </>
  );
};

export default Button;
