import React, { ReactNode } from "react";

import { StyledGameGrid } from "./GameGrid.style";

const GameGrid: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <StyledGameGrid>{children}</StyledGameGrid>;
};

export default GameGrid;
