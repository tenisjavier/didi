import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import FoodHero from "../../components/sections/FoodHero";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";
import { ab } from "../../config/ab";
import gtmEvent from "../../config/gtm";

const Index = ({ data }) => {
  const version = ab("2023-07-carrousel-a-t4", "2023-07-carrousel-b-t4", "t4");
  const images = data.allContentfulAsset.nodes;
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    gtmEvent(`click-carrousel`, {
      btnType: "carrousel",
      versionName: version,
      tabId: id,
      countryCode: "cr",
    });
    setActiveHero(id);
  };
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "cr.HomeHero.bgImage";
  })[0];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "cr.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "cr.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "cr.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "cr.PaxHeroMobile.bgImage";
  })[0];
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodHero.bgImage";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "cr.FoodHeroMobile.bgImage";
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
    return image.title === "cr.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "cr.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "cr.PaxCTA.image";
  })[0];

  return (
    <Layout sb={false}>
      {version === "b" && <HomeHero bgImage={homeHeroBgImage}></HomeHero>}
      {version === "a" && (
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
      )}
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <DrvCTA image={drvCTAImage} bullets={false}></DrvCTA>
      <PaxCTA image={paxCTAImage} bullets={false}></PaxCTA>
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
            "cr.HomeHero.bgImage"
            "cr.DrvHero.bgImage"
            "cr.DrvHeroMobile.bgImage"
            "cr.PaxHero.bgImage"
            "cr.PaxHeroMobile.bgImage"
            "cr.FoodHero.bgImage"
            "cr.FoodHeroMobile.bgImage"
            "cr.FinancialServices.bgImage"
            "cr.FinancialServicesMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "carrousel-icon-food"
            "cr.SafetyCTA.image"
            "cr.DrvCTA.image"
            "cr.PaxCTA.image"
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
