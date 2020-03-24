import React from "react";
import { Link } from "gatsby";

import { StyledGameCard, GameImage, Overlay, OverlayText } from "./GameCard.style";

export interface GameCardProps {
  title: string;
  image: string;
  id: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, id }) => {
  return (
    <StyledGameCard>
      <Link to={`player?id=${id}`}>
        <GameImage width="300" height="225" src={image} alt={title} />
        <Overlay>
          <OverlayText>{title}</OverlayText>
        </Overlay>
      </Link>
    </StyledGameCard>
  );
};

export default GameCard;
