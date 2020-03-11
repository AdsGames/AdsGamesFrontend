import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import LinkDescription from "../components/LinkLayout/LinkDescription";
import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";

const AboutPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="About A.D.S. Games" />
        <Card>
          <LinkDescription>
            A.D.S. (Allan and Daniel Software) Games was founded on the 21st of March 2011 by Allan Legemaate and Daniel Van Stemp. It
            contains indie games programmed in C++, Java, Visual Basic, Scratch, HTML5, and Game Maker.
          </LinkDescription>
        </Card>
        <Card>
          <ContentHeader text="Staff" />
        </Card>
      </Container>
    </Page>
  </IndexLayout>
);

export default AboutPage;
