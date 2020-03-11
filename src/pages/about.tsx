import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import LinkDescription from "../components/LinkLayout/LinkDescription";
import LinkLayout from "../components/LinkLayout/LinkLayout";
import LinkIcon from "../components/LinkLayout/LinkIcon";

import ContentHeader from "../components/ContentHeader";

import IndexLayout from "../layouts";
import dannyIcon from "../images/about_icons/danny.png";
import allanIcon from "../images/about_icons/allan.png";

const staff = [
  {
    title: "Danny",
    text:
      // eslint-disable-next-line max-len
      "Daniel Van Stemp (a.k.a. Danward or Danny) is a programmer and an artist. He has the ability to communicate with his chickens, and once 3D modelled a cube.",
    image: dannyIcon,
    iconBgColor: "#7700ff",
  },
  {
    title: "Allan",
    text:
      // eslint-disable-next-line max-len
      "Allan Legemaate is the lead programmer, and makes music, this site and game engines, and codes in 12 languages. He also has the ability to spawn random animals in real life.",
    image: allanIcon,
    iconBgColor: "red",
  },
];
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
      </Container>
      <Container>
        <Card>
          <ContentHeader text="Staff" />
        </Card>
      </Container>
      {staff.map(({ title, text, image, iconBgColor }) => (
        <Container>
          <Card title={title}>
            <LinkLayout>
              <LinkDescription>{text}</LinkDescription>
              <LinkIcon color={iconBgColor} title={title} image={image} height={160} />
            </LinkLayout>
          </Card>
        </Container>
      ))}
    </Page>
  </IndexLayout>
);

export default AboutPage;
