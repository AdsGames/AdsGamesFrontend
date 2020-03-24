import React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import { GameCard, GameGrid } from "../components/GameGrid";

import IndexLayout from "../layouts";

import gameImage from "../images/game.png";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Card title="Featured Games">
          <h1>Content here</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>

        <Card title="Popular Games">
          <GameGrid>
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
          </GameGrid>
        </Card>

        <Card title="Top Rated Games">
          <GameGrid>
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
            <GameCard title="Game Name" image={gameImage} id="butts" />
          </GameGrid>
        </Card>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
