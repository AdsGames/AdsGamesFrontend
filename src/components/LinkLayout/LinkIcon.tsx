import React from "react";

import { StyledLinkIcon, LinkIconContainer } from "./LinkIcon.style";

export interface GameCardProps {
  title: string;
  image: string;
  color: string;
  height: number;
}

const LinkIcon: React.FC<GameCardProps> = ({ title, image, color, height }) => {
  return (
    <LinkIconContainer color={color}>
      <StyledLinkIcon src={image} alt={title} height={height} />
    </LinkIconContainer>
  );
};

export default LinkIcon;
