import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HeroCarrousel from "../../components/sections/HeroCarrousel";
import DriverCTA from "../../components/sections/Drv/DrvCTA";
import DrvHero from "../../components/sections/DrvHero";
import PaxHero from "../../components/sections/PaxHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const [activeHero, setActiveHero] = useState(0);
  const updateHero = (id) => {
    setActiveHero(id);
  };
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "pa.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.DrvHeroMobile.bgImage";
  })[0];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "pa.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.PaxHeroMobile.bgImage";
  })[0];
  const carrouselIcons0 = images.filter((image) => {
    return image.title === "carrousel-icon-drv";
  })[0];
  const carrouselIcons1 = images.filter((image) => {
    return image.title === "carrousel-icon-pax";
  })[0];
  const carrouselIcons = [carrouselIcons0, carrouselIcons1];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "pa.SafetyCTA.image";
  })[0];
  const paxCTAImage = images.filter((image) => {
    return image.title === "pa.PaxCTA.image";
  })[0];

  const homeColumnsImages = images.filter((image) => {
    return (
      image.title === "logo-question" ||
      image.title === "logo-document" ||
      image.title === "logo-quotes"
    );
  });

  return (
    <Layout sb={false}>
      <div className="carousel-section">
        <divconte
          className={`${activeHero !== 0 && "hidden"} carousel-section-item`}
        >
          <DrvHero
            bgImage={drvHeroBgImage}
            mobileBgImage={drvHeroMobileBgImage}
          ></DrvHero>
        </divconte>
        <div
          className={`${activeHero !== 1 && "hidden"} carousel-section-item`}
        >
          <PaxHero
            bgImage={paxHeroBgImage}
            mobileBgImage={paxHeroMobileBgImage}
          ></PaxHero>
        </div>
        <HeroCarrousel
          images={carrouselIcons}
          updateHero={updateHero}
        ></HeroCarrousel>
      </div>
      <DriverCTA></DriverCTA>
      <PaxCTA image={paxCTAImage}></PaxCTA>
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
            "pa.HomeHero.bgImage"
            "pa.DrvHero.bgImage"
            "pa.DrvHeroMobile.bgImage"
            "pa.PaxHero.bgImage"
            "pa.PaxHeroMobile.bgImage"
            "carrousel-icon-drv"
            "carrousel-icon-pax"
            "pa.SafetyCTA.image"
            "pa.PaxCTA.image"
            "logo-question"
            "logo-document"
            "logo-quotes"
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
