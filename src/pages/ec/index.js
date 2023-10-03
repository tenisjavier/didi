import React, { useState } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import DriverCTA from "../../components/sections/Drv/DrvCTA";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
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
    return image.title === "ec.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "ec.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ec.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "ec.PaxHeroMobile.bgImage";
  })[0];
  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carrousel-icon-drv";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carrousel-icon-pax";
  })[0];
  const carrouselIcons = [carrouselIcons0, carrouselIcons1];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "ec.SafetyCTA.image";
  })[0];
  const drvCTAImage = images.filter((image) => {
    return image.title === "ec.DrvCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "ec.PaxCTA.image";
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

        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
        ></HeroCarrousel>
      </>
      {useLocation().search === "?test=day" && <DriverCTA></DriverCTA>}
      <DrvCTA image={drvCTAImage} bullets={false}></DrvCTA>
      <PaxCTA image={paxCTAImage} bullets={false}></PaxCTA>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
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
            "ec.HomeHero.bgImage"
            "ec.DrvHero.bgImage"
            "ec.DrvHeroMobile.bgImage"
            "ec.PaxHero.bgImage"
            "ec.PaxHeroMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "ec.HelloCTA.image"
            "ec.SafetyCTA.image"
            "ec.DrvCTA.image"
            "ec.PaxCTA.image"
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
