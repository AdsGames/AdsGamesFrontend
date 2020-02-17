import * as React from "react";
import { Global, css } from "@emotion/core";
import styled from "styled-components";
import normalize from "../styles/normalize";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111111;
`;

const LayoutRoot: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
