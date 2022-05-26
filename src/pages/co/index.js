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
    return image.title === "co.HomeHero.bgImage";
  })[0];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "co.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "co.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "co.PaxCTA.image";
  })[0];

  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
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
            "co.HomeHero.bgImage"
            "co.SafetyCTA.image"
            "co.DrvCTA.image"
            "co.PaxCTA.image"
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
