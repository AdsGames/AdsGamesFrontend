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
    text: "A powerful audio software tool useful for recording, editing, blah blah",
    image: audacityIcon,
    iconBgColor: "#2980B9",
    extLinks: [
      {
        text: "Get it now!",
        location: "https://www.audacityteam.org/",
      },
    ],
  },
  {
    title: "Code::Blocks",
    text: "A free, open source C and C++ IDE. We use it to develop all of our C++ Games. A great pooking to get into C or C++ development!",
    image: codeblocksIcon,
    iconBgColor: "#EBEFF0",
    extLinks: [
      {
        text: "Get it now!",
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
              <LinkIcon color={iconBgColor} title={title} image={image} />
            </LinkLayout>
          </Card>
        </Container>
      ))}
    </Page>
  </IndexLayout>
);

export default LinksPage;
