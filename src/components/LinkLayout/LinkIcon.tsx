import React from "react";

import { StyledLinkIcon, LinkIconContainer } from "./LinkIcon.style";

export interface GameCardProps {
  title: string;
  image: string;
  color: string;
  width: number;
  height: number;
}

const LinkIcon: React.FC<GameCardProps> = ({ title, image, color, width, height }) => {
  return (
    <LinkIconContainer color={color} width={width}>
      <StyledLinkIcon src={image} alt={title} height={height} />
    </LinkIconContainer>
  );
};

export default LinkIcon;
