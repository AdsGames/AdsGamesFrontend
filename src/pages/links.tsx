import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";

import IndexLayout from "../layouts";
import LinkButton from "../components/Inputs/LinkButton";
import { LinkIcon, LinkLayout, LinkDescription } from "../components/LinkLayout";
import * as LINK_ICONS from "../images/link_icons";

const links = [
  {
    title: "GitHub",
    text: "Check out the source code to our games, this website, and other programs!",
    image: LINK_ICONS.github,
    iconBgColor: "#34495E",
    extLinks: [
      {
        text: "Allan's Github",
        location: "https://github.com/alegemaate",
      },
      {
        text: "Danny's Github",
        location: "https://github.com/danwardvs",
      },
      {
        text: "ADS Games Organization Github",
        location: "https://github.com//ADSGames",
      },
    ],
  },
  {
    title: "Audacity",
    text:
      // eslint-disable-next-line max-len
      "A powerful audio software tool useful for recording, editing, and generating sounds and music. It features multi-track recording, and tons of effects. You need this if you are adding your own music or sounds to your games.",
    image: LINK_ICONS.audacity,
    iconBgColor: "#2980B9",
    extLinks: [
      {
        text: "Download it here!",
        location: "https://www.audacityteam.org/",
      },
    ],
  },
  {
    title: "Code::Blocks",
    text:
      // eslint-disable-next-line max-len
      "A free, open source C and C++ IDE. We use it to develop all of our C++ Games. A great place to start for those looking to get into C or C++ development!",
    image: LINK_ICONS.codeblocks,
    iconBgColor: "#EBEFF0",
    extLinks: [
      {
        text: "Download it here!",
        location: "http://codeblocks.org/",
      },
    ],
  },
  {
    title: "Filezilla",
    text: "If you are looking for a free FTP client, filezilla is what you need. Filezilla is a powerful and easy to use ftp client.",
    image: LINK_ICONS.filezilla,
    iconBgColor: "#34495E",
    extLinks: [
      {
        text: "Download it here!",
        location: "https://filezilla-project.org/",
      },
    ],
  },
  {
    title: "Notepad++",
    text:
      // eslint-disable-next-line max-len
      "Notepad++ is a free, open source text editor that supports syntax highlighting for several languages. There is a large plugin base so you can customize it however you want. It is a must have for programmers.",
    image: LINK_ICONS.notepadpp,
    iconBgColor: "#27AE60",
    extLinks: [
      {
        text: "Download it here!",
        location: "https://notepad-plus-plus.org/",
      },
    ],
  },
  {
    title: "Paint.NET",
    text:
      // eslint-disable-next-line max-len
      "Paint.NET brings MS Paint to a new level with all new features. This program is a must for beginner and intermediate graphic designers who don't want to pay for expensive editing software. Best of all its free!",
    image: LINK_ICONS.paintnet,
    iconBgColor: "#C0392B",
    extLinks: [
      {
        text: "Download it here!",
        location: "https://www.getpaint.net/",
      },
    ],
  },
  {
    title: "Paint.NET",
    text:
      // eslint-disable-next-line max-len
      "Scratch is a useful programming language which focuses on teaching beginner programmers to program using an easy to learn, block based language. It includes a simple drag and drop interface and plenty of support to help you get started.",
    image: LINK_ICONS.scratch,
    iconBgColor: "#E67E22",
    extLinks: [
      {
        text: "Download it here!",
        location: "https://scratch.mit.edu/",
      },
    ],
  },
  {
    title: "SFXR",
    text:
      // eslint-disable-next-line max-len
      "This is a free tool that allows you to randomly generate 8 and 16 bit sounds for when you need basic sound effects for games or other purposes. It has a clean easy to use UI that is easy to get into.",
    image: LINK_ICONS.sfxr,
    iconBgColor: "#F1C40F",
    extLinks: [
      {
        text: "Download it here!",
        location: "http://www.drpetter.se/project_sfxr.html",
      },
    ],
  },
];

const LinksPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="Useful Links" />
      </Container>

      {links.map(({ title, text, extLinks, image, iconBgColor }) => (
        <Container>
          <Card title={title}>
            <LinkLayout>
              <LinkDescription>
                {text}
                <br />
                {extLinks.map(link => (
                  <LinkButton>
                    <a href={link.location}>{link.text}</a>
                  </LinkButton>
                ))}
              </LinkDescription>
              <LinkIcon color={iconBgColor} title={title} image={image} />
            </LinkLayout>
          </Card>
        </Container>
      ))}
    </Page>
  </IndexLayout>
);

export default LinksPage;
