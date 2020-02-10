import React from "react";

import { StyledGameCard, GameImage, Overlay, OverlayText } from "./GameCard.style";

export interface GameCardProps {
  title: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
  return (
    <StyledGameCard>
      <GameImage width="300" height="225" src={image} alt={title} />
      <Overlay>
        <OverlayText>{title}</OverlayText>
      </Overlay>
    </StyledGameCard>
  );
};

export default GameCard;
