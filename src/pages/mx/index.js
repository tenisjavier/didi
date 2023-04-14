import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import FoodCTA from "../../components/sections/FoodCTA";
import FleetAboutCTA from "../../components/sections/FleetAboutCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import { ab } from "../../config/ab";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const isBVersion = ab(
    "2023-04-homemx-original-t1",
    "2023-04-homemx-b-t1",
    "t1"
  );
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.HomeHero.bgImage";
  })[0];
  const homeHeroBgImageB = images.filter((image) => {
    return image.title === "mx.HomeHeroDesktopB.bgImage";
  })[0];
  const homeHeroBgMobileImageB = images.filter((image) => {
    return image.title === "mx.HomeHeroMobileB.bgImage";
  })[0];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "mx.DrvCTA.image";
  })[0];
  const FoodCTAImage = images.filter((image) => {
    return image.title === "mx.FoodCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "mx.PaxCTA.image";
  })[0];
  const FleetAboutCTAImage = images.filter((image) => {
    return image.title === "mx.FleetAboutCTA.image";
  })[0];

  return (
    <Layout>
      {isBVersion ? (
        <HomeHero
          title="Genera Ganancias en DiDi Conductor"
          bgImage={homeHeroBgImageB}
          mobileBgImage={homeHeroBgMobileImageB}
          btnType="drv"
        ></HomeHero>
      ) : (
        <HomeHero bgImage={homeHeroBgImage}></HomeHero>
      )}
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <DrvCTA image={drvCTAImage}></DrvCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <FleetAboutCTA image={FleetAboutCTAImage}></FleetAboutCTA>
      <FoodCTA image={FoodCTAImage}></FoodCTA>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.HomeHero.bgImage"
            "mx.HomeHeroDesktopB.bgImage"
            "mx.HomeHeroMobileB.bgImage"
            "mx.SafetyCTA.image"
            "mx.DrvCTA.image"
            "mx.FoodCTA.image"
            "mx.PaxCTA.image"
            "mx.FleetAboutCTA.image"
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
