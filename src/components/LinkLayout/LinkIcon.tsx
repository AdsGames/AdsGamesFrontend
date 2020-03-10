import React from "react";

import { StyledLinkIcon, LinkIconContainer } from "./LinkIcon.style";

export interface GameCardProps {
  title: string;
  image: string;
  color: string;
}

const LinkIcon: React.FC<GameCardProps> = ({ title, image, color }) => {
  return (
    <LinkIconContainer color={color}>
      <StyledLinkIcon width="256" height="256" src={image} alt={title} />
    </LinkIconContainer>
  );
};

export default LinkIcon;
