import React from "react";

import { LinkImage } from "./LinkIcon.style";
import { StyledLinkIcon } from "./LinkIcon.style";

export interface GameCardProps {
  title: string;
  image: string;
}

const LinkIcon: React.FC<GameCardProps> = ({ title, image }) => {
  return (
    <StyledLinkIcon>
      <LinkImage width="256" height="256" src={image} alt={title} />
    </StyledLinkIcon>
  );
};

export default LinkIcon;
