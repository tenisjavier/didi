import React, { useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import FoodHero from "../../components/sections/FoodHero";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DriverCTA from "../../components/sections/Drv/DrvCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "co.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "co.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "co.PaxHeroMobile.bgImage";
  })[0];
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodHero.bgImage";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "co.FoodHeroMobile.bgImage";
  })[0];
  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carrousel-icon-drv";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carrousel-icon-pax";
  })[0];
  const carrouselIcons2 = images.filter((image) => {
    return image.title === "carrousel-icon-food";
  })[0];

  const carrouselIcons = [carrouselIcons0, carrouselIcons1, carrouselIcons2];
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
    <Layout sb={false}>
      <>
        <div className={`${activeHero !== 0 && "hidden"} `}>
          <DrvHero
            bgImage={drvHeroBgImage}
            mobileBgImage={drvHeroMobileBgImage}
          ></DrvHero>
        </div>
        <div className={`${activeHero !== 1 && "hidden"} `}>
          <PaxHero
            bgImage={paxHeroBgImage}
            mobileBgImage={paxHeroMobileBgImage}
          ></PaxHero>
        </div>
        <div className={`${activeHero !== 2 && "hidden"} `}>
          <FoodHero
            bgImage={foodHeroBgImage}
            mobileBgImage={foodHeroMobileBgImage}
          ></FoodHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
        ></HeroCarrousel>
      </>
      {useLocation().search === "?test=day" && <DriverCTA></DriverCTA>}
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <DrvCTA image={drvCTAImage}></DrvCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
      <HomeColumns></HomeColumns>
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
            "co.HomeHero.bgImage"
            "co.DrvHero.bgImage"
            "co.DrvHeroMobile.bgImage"
            "co.PaxHero.bgImage"
            "co.PaxHeroMobile.bgImage"
            "co.FoodHero.bgImage"
            "co.FoodHeroMobile.bgImage"
            "co.FinancialServices.bgImage"
            "co.FinancialServicesMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "carrousel-icon-food"
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
