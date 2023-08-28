import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import FoodHero from "../../components/sections/FoodHero";
import FinancialServicesHero from "../../components/sections/FinancialServicesHero";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import FoodCTA from "../../components/sections/FoodCTA";
import FleetAboutCTA from "../../components/sections/FleetAboutCTA";
import PaxCTA from "../../components/sections/PaxCTA";

const Index = ({ data }) => {
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "mx.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "mx.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.PaxHeroMobile.bgImage";
  })[0];
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.FoodHeroMobile.bgImage";
  })[0];
  const FSBgImage = images.filter((image) => {
    return image.title === "mx.FinancialServices.bgImage";
  })[0];
  const FSMobileBgImage = images.filter((image) => {
    return image.title === "mx.FinancialServicesMobile.bgImage";
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
  const carrouselIcons3 = images.filter((image) => {
    return image.title === "carrousel-icon-finance";
  })[0];
  const carrouselIcons = [
    carrouselIcons0,
    carrouselIcons1,
    carrouselIcons2,
    carrouselIcons3,
  ];
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
        <div className={`${activeHero !== 3 && "hidden"} `}>
          <FinancialServicesHero
            bgImage={FSBgImage}
            mobileBgImage={FSMobileBgImage}
          ></FinancialServicesHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
        ></HeroCarrousel>
      </>

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
            "mx.HomeHeroDesktop.bgImage"
            "mx.HomeHeroMobile.bgImage"
            "mx.DrvHero.bgImage"
            "mx.DrvHeroMobile.bgImage"
            "mx.PaxHero.bgImage"
            "mx.PaxHeroMobile.bgImage"
            "mx.FoodHero.bgImage"
            "mx.FoodHeroMobile.bgImage"
            "mx.FinancialServices.bgImage"
            "mx.FinancialServicesMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "carrousel-icon-finance"
            "carrousel-icon-food"
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
