import React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";

import IndexLayout from "../layouts";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Card title="Featured Games">
          <h1>Content here</h1>
          <p>asdl jkfhajs khdflkj ashdf kjahs dfjkdasf</p>
        </Card>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
