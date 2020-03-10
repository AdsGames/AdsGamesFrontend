import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";

import IndexLayout from "../layouts";
import { LinkIcon, LinkLayout } from "../components/LinkLayout";

// Pls I know no other way
import githubIcon from "../images/link_icons/github.png";
import audacityIcon from "../images/link_icons/audacity.png";
import codeblocksIcon from "../images/link_icons/codeblocks.png";

const links = [
  {
    title: "GitHub",
    text: "Check out the source code to our games, and other programs!",
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
];

const LinksPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="Useful Links" />
      </Container>

      {links.map(({ title, text, extLinks }) => (
        <Container>
          <Card title={title}>
            <LinkLayout>
              <Container>
                <p>{text}</p>
                {extLinks.map(link => (
                  <>
                    <a href={link.location} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                    <br />
                  </>
                ))}
              </Container>

              <LinkIcon color="#000" title="Github" image={githubIcon} />
            </LinkLayout>
          </Card>
        </Container>
      ))}

      <Container>
        <Card title="Audacity">
          <LinkLayout>
            <Container>
              <p>
                A powerful audio software tool useful for recording, editing, and generating sounds and music. It features multi-track
                recording, and tons of effects. You need this if you are adding your own music or sounds to your games.
                <br />
                <a href="https://www.audacityteam.org/" target="_blank">
                  Get it here!
                </a>
              </p>
            </Container>

            <LinkIcon color="#000" title="Audacity" image={audacityIcon} />
          </LinkLayout>
        </Card>
      </Container>

      <Container>
        <Card title="Code::Blocks">
          <LinkLayout>
            <Container>
              <p>
                A free, open source C and C++ IDE. We use it to develop all of our C++ Games. A great place to start for those looking to
                get into C or C++ development!
                <br />
                <a href="http://codeblocks.org/" target="_blank">
                  Get it here!
                </a>
              </p>
            </Container>

            <LinkIcon color="#000" title="Code::Blocks" image={codeblocksIcon} />
          </LinkLayout>
        </Card>
      </Container>
    </Page>
  </IndexLayout>
);

export default LinksPage;
