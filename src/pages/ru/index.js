import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ru.HomeHero.bgImage";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "ru.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "ru.PaxCTA.image";
  })[0];

  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <DrvCTA image={drvCTAImage}></DrvCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "ru.HomeHero.bgImage"
            "ru.DrvCTA.image"
            "ru.PaxCTA.image"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
