import * as React from "react";
import styled from "@emotion/styled";

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
`;

const Page: React.FC<{
  className?: string;
}> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
