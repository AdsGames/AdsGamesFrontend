import * as React from "react";
import { ErrorText } from "./InputError.style";

const InputError: React.FC<{ error?: string }> = ({ error }) => (
  <>{Boolean(error) && <ErrorText>{error}</ErrorText>}</>
);

export default InputError;
