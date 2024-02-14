import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
import DrvWhyDiDi from "../../../components/sections/DrvWhyDiDi";
import DrvCityList from "../../../components/sections/DrvCityList";
import HomeColumns from "../../../components/sections/PaxColumns";
import SilderSection from "../../../components/sections/SliderSection";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";
import PaxCTAApp from "../../../components/sections/PaxCTAApp";
import { ab } from "../../../config/ab";
import DrvHeroB from "../../../components/sections/DrvHeroB";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "do.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "do.DrvHeroMobile.bgImage";
  })[0];
  const imagehero = images.filter((image) => {
    return image.title === "Driver GIF";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "do.DrvWhyDiDi.image";
  })[0];
  const paxCTAAppImage = images.filter((image) => {
    return image.title === "do.PaxCTAApp.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;

  const version = ab("202402-animationhero-a", "202402-animationhero-b", "t9");
  return (
    <Layout>
      {version === "a" && (
        <DrvHero
          bgImage={drvHeroBgImage}
          mobileBgImage={drvHeroMobileBgImage}
        ></DrvHero>
      )}
      {version === "b" && <DrvHeroB image={imagehero}></DrvHeroB>}

      <DrvWhyDiDi image={drvWhyDiDiImage}></DrvWhyDiDi>
      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <Requirements data={products}></Requirements>
      <PaxCTAApp image={paxCTAAppImage}></PaxCTAApp>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
      {cities != null && <DrvCityList data={cities}></DrvCityList>}
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "do.DrvHero.bgImage"
            "do.DrvHeroMobile.bgImage"
            "do.DrvWhyDiDi.image"
            "do.DrvFeatures.image"
            "do.PaxCTAApp.image"
            "Driver GIF"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "do" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: "do" } } }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
      }
    }
  }
`;
