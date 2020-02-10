import React, { ReactNode } from "react";

import { StyledCard, CardTitle, CardContent, CardTitleContainer } from "./Card.style";

const Header: React.SFC<{ title: string; children: ReactNode }> = ({ title = "cats", children = "cats" }) => {
  return (
    <StyledCard>
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
      </CardTitleContainer>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
export default Header;
