import * as React from "react";

import { NavContainer } from "./Navigation.style";
import NavButton, { NavButtonProps } from "./NavButton";

import * as ICONS from "../../images/nav_icons";
import * as ROUTES from "../../constants/routes";

export const navLinks: NavButtonProps[] = [
  { text: "Home", icon: ICONS.home, hoverIcon: ICONS.homeHover, route: ROUTES.home },
  { text: "Games", icon: ICONS.games, hoverIcon: ICONS.gamesHover, route: ROUTES.games },
  { text: "Contact", icon: ICONS.contact, hoverIcon: ICONS.contactHover, route: ROUTES.contact },
  { text: "Assets", icon: ICONS.assets, hoverIcon: ICONS.assetsHover, route: ROUTES.assets },
  { text: "Learn", icon: ICONS.learn, hoverIcon: ICONS.learnHover, route: ROUTES.learn },
  { text: "Members", icon: ICONS.members, hoverIcon: ICONS.membersHover, route: ROUTES.members },
  { text: "Links", icon: ICONS.links, hoverIcon: ICONS.linksHover, route: ROUTES.links },
  { text: "About", icon: ICONS.about, hoverIcon: ICONS.aboutHover, route: ROUTES.about },
];

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      {navLinks.map(link => (
        <NavButton key={link.text} {...link} />
      ))}
    </NavContainer>
  );
};

export default Navigation;
