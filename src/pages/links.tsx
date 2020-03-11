import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";

import IndexLayout from "../layouts";
import { LinkIcon, LinkLayout, LinkDescription } from "../components/LinkLayout";

// Pls I know no other way
import githubIcon from "../images/link_icons/github.png";
import audacityIcon from "../images/link_icons/audacity.png";
import codeblocksIcon from "../images/link_icons/codeblocks.png";

const links = [
  {
    title: "GitHub",
    text: "Check out the source code to our games, and other programs!",
    image: githubIcon,
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
    ],
  },
  {
    title: "Audacity",
    text:
      // eslint-disable-next-line max-len
      "A powerful audio software tool useful for recording, editing, and generating sounds and music. It features multi-track recording, and tons of effects. You need this if you are adding your own music or sounds to your games.",
    image: audacityIcon,
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
    image: codeblocksIcon,
    iconBgColor: "#EBEFF0",
    extLinks: [
      {
        text: "Download it here!",
        location: "http://codeblocks.org/",
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
                {extLinks.map(link => (
                  <>
                    <br />
                    <a href={link.location} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </>
                ))}
              </LinkDescription>
              <LinkIcon color={iconBgColor} title={title} image={image} width={192} height={192} />
            </LinkLayout>
          </Card>
        </Container>
      ))}
    </Page>
  </IndexLayout>
);

export default LinksPage;
