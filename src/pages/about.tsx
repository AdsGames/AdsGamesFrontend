import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";

const AboutPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="About" />
      </Container>
    </Page>
  </IndexLayout>
);

export default AboutPage;
