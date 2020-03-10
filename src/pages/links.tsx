import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";

import IndexLayout from "../layouts";
import { LinkIcon } from "../components/LinkLayout";
import { LinkLayout } from "../components/LinkLayout";

// Pls I know no other way
import githubIcon from "../images/link_icons/github.png";
import audacityIcon from "../images/link_icons/audacity.png";
import codeblocksIcon from "../images/link_icons/codeblocks.png";

const LinksPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="Useful Links" />
      </Container>

      <Container>
        <Card title="GitHub">
          <LinkLayout>
            <Container>
              <h4> Check out the source code to our games, and other programs!</h4>
              <p>
                <a href="https://github.com/alegemaate">Allan's Github</a>
                <br></br>
                <a href="https://github.com/danwardvs">Danny's Github</a>
              </p>
            </Container>

            <LinkIcon title="Github" image={githubIcon} />
          </LinkLayout>
        </Card>
      </Container>

      <Container>
        <Card title="Audacity">
          <LinkLayout>
            <Container>
              <p>
                A powerful audio software tool useful for recording, editing, and generating sounds and music. It features multi-track
                recording, and tons of effects. You need this if you are adding your own music or sounds to your games.
                <br></br>
                <a href="https://www.audacityteam.org/" target="_blank">
                  Get it here!
                </a>
              </p>
            </Container>

            <LinkIcon title="Audacity" image={audacityIcon} />
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
                <br></br>
                <a href="http://codeblocks.org/" target="_blank">
                  Get it here!
                </a>
              </p>
            </Container>

            <LinkIcon title="Code::Blocks" image={codeblocksIcon} />
          </LinkLayout>
        </Card>
      </Container>
    </Page>
  </IndexLayout>
);

export default LinksPage;
