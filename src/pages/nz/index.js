import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const homeHeroBgImage = images.filter((image) => {
    return image.title === "nz.HomeHero.bgImage";
  })[0];

  const safetyCTABgImage = images.filter((image) => {
    return image.title === "nz.SafetyCTA.bgImage";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "nz.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "nz.PaxCTA.image";
  })[0];


  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <DrvCTA image={drvCTAImage}></DrvCTA>
      <SafetyCTA bgImage={safetyCTABgImage}></SafetyCTA>
    </Layout>
  );
};

export default Index;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(nz.HomeHero.bgImage)|(nz.DrvCTA.image)|(nz.PaxCTA.imag)|(nz.SafetyCTA.bgImage)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
