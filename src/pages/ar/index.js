import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
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
      countryCode: "ar",
    });
    setActiveHero(id);
  };
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ar.HomeHero.bgImage";
  })[0];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ar.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "ar.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ar.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "ar.PaxHeroMobile.bgImage";
  })[0];
  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carrousel-icon-drv";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carrousel-icon-pax";
  })[0];
  const carrouselIcons = [carrouselIcons0, carrouselIcons1];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "ar.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "ar.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "ar.PaxCTA.image";
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
          <HeroCarrousel
            images={carrouselIcons}
            updateHero={updateHero}
          ></HeroCarrousel>
        </>
      )}
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
            "ar.HomeHero.bgImage"
            "ar.DrvHero.bgImage"
            "ar.DrvHeroMobile.bgImage"
            "ar.PaxHero.bgImage"
            "ar.PaxHeroMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "ar.SafetyCTA.image"
            "ar.DrvCTA.image"
            "ar.PaxCTA.image"
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
