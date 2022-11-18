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
    return image.title === "au.HomeHero.bgImage";
  })[0];

  const safetyCTABgImage = images.filter((image) => {
    return image.title === "au.SafetyCTA.bgImage";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "au.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "au.PaxCTA.image";
  })[0];
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });

  return (
    <Layout>
      <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      <DrvCTA image={drvCTAImage}></DrvCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
      <SafetyCTA bgImage={safetyCTABgImage}></SafetyCTA>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.HomeHero.bgImage)|(au.SafetyCTA.image)|(au.DrvCTA.image)|(au.PaxCTA.imag)|(au.SafetyCTA.bgImage)|(au.HomeColumns.image)/"
        }
      }
      sort: { title: ASC }
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
