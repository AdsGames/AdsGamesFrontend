import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import ContentHeader from "../components/ContentHeader";
import { GameCard, GameGrid } from "../components/GameGrid";

import { Game } from "../models";
import { client } from "../apollo";
import IndexLayout from "../layouts";

import gameImage from "../images/game.png";

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await client.query({
        query: gql`
          query {
            games {
              name
              shortName
              id
            }
          }
        `,
      });
      setGames(data.games);
    };

    fetch();
  }, []);

  return (
    <IndexLayout>
      <Page>
        <Container>
          <ContentHeader text="Games" sticky />

          <Card title="Online">
            <GameGrid>
              {games.map(game => (
                <GameCard key={game.id} title={game.name} image={gameImage} id={game.id} />
              ))}
            </GameGrid>
          </Card>

          <Card title="Download">
            <GameGrid>
              {games.map(game => (
                <GameCard key={game.id} title={game.name} image={gameImage} id={game.id} />
              ))}
            </GameGrid>
          </Card>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default GamesPage;
