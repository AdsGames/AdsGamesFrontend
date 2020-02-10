import * as navIcons from "../images/nav_icons";

export interface NavLink {
  text: string;
  icon: string;
  hoverIcon: string;
}

export const NAV_LINKS: NavLink[] = [
  { text: "Home", icon: navIcons.home, hoverIcon: navIcons.homeHover },
  { text: "Games", icon: navIcons.games, hoverIcon: navIcons.gamesHover },
  { text: "Contact", icon: navIcons.contact, hoverIcon: navIcons.contactHover },
  { text: "Assets", icon: navIcons.assets, hoverIcon: navIcons.assetsHover },
  { text: "Learn", icon: navIcons.learn, hoverIcon: navIcons.learnHover },
  { text: "Members", icon: navIcons.members, hoverIcon: navIcons.membersHover },
  { text: "Links", icon: navIcons.links, hoverIcon: navIcons.linksHover },
  { text: "About", icon: navIcons.about, hoverIcon: navIcons.aboutHover },
];
