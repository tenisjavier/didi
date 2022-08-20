import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHeroRTL from "../../components/sections/HomeHeroRTL";
import SafetyCTARTL from "../../components/sections/SafetyCTARTL";
import DrvCTARTL from "../../components/sections/DrvCTARTL";
import VideoSection from "../../components/sections/VideoSection";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const homeHeroBgImage = images.filter((image) => {
    return image.title === "eg.HomeHero.bgImage";
  })[0];

  const safetyCTABgImage = images.filter((image) => {
    return image.title === "eg.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "eg.DrvCTA.image";
  })[0];

  return (
    <Layout>
      <HomeHeroRTL bgImage={homeHeroBgImage}></HomeHeroRTL>
      <DrvCTARTL image={drvCTAImage}></DrvCTARTL>
      <VideoSection></VideoSection>
      <SafetyCTARTL image={safetyCTABgImage}></SafetyCTARTL>
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
          regex: "/(eg.HomeHero.bgImage)|(eg.SafetyCTA.image)|(eg.DrvCTA.image)/"
        }
      }
      sort: { fields: title }
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
