import * as navIcons from "../images/nav_icons";

export interface NavLink {
  text: string;
  icon: string;
  hoverIcon?: string;
}

export const NAV_LINKS: NavLink[] = [
  { text: "Home", icon: navIcons.home, hoverIcon: navIcons.homeHover },
  { text: "Games", icon: navIcons.games },
  { text: "Contact", icon: navIcons.contact },
  { text: "Assets", icon: navIcons.assets },
  { text: "Learn", icon: navIcons.learn },
  { text: "Members", icon: navIcons.members },
  { text: "Links", icon: navIcons.links },
  { text: "About", icon: navIcons.about },
];
