import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { Game } from "../models";
import { client } from "../apollo";

import Page from "../components/Page";
import Container from "../components/Container";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";

import IndexLayout from "../layouts";
import { LinkDescription } from "../components/LinkLayout";

const AssetsPage = () => {
  const id = window.location.toString().split("=");
  console.log(id[1]);

  const [games, setGames] = useState<Game | null>();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await client.query({
        query: gql`
          query {
            game(id: "${id[1]}") {
              name
              shortName
              description
            }
          }
        `,
      });
      setGames(data.game);
    };

    fetch();
  }, []);

  console.log(games);

  return (
    <IndexLayout>
      <Page>
        {games && (
          <>
            <Container>
              <ContentHeader text={games.name} />
            </Container>
            <Container>
              <Card title="About">
                <LinkDescription>{games.description}</LinkDescription>
              </Card>
            </Container>
          </>
        )}
      </Page>
    </IndexLayout>
  );
};

export default AssetsPage;
