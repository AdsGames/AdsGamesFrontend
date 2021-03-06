import * as React from "react";
import styled from "styled-components";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
`;

const LayoutMain: React.FC<{
  className?: string;
}> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
