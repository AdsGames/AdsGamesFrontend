import React, { ReactNode } from "react";

import { StyledCard, CardTitle, CardContent, CardTitleContainer } from "./Card.style";

const Card: React.FC<{ title?: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <StyledCard>
      {title && (
        <CardTitleContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
      )}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};
export default Card;
