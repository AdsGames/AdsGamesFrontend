import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";

const LinksPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <ContentHeader text="Useful Links" />
      </Container>
    </Page>
  </IndexLayout>
);

export default LinksPage;
