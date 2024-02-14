import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
import DrvHeroB from "../../../components/sections/DrvHeroB";
import DrvWhyDiDi from "../../../components/sections/DrvWhyDiDi";
import DrvVideoGrid from "../../../components/sections/DrvVideoGrid";
import DrvBanner from "../../../components/sections/DrvBanner";
import DrvFeatures from "../../../components/sections/DrvFeatures";
import HomeColumns from "../../../components/sections/PaxColumns";
import DrvCityList from "../../../components/sections/DrvCityList";
import SilderSection from "../../../components/sections/SliderSection";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";
import PaxCTAApp from "../../../components/sections/PaxCTAApp";
import { ab } from "../../../config/ab";
const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "cl.DrvHero.bgImage";
  })[0];
  const imagehero = images.filter((image) => {
    return image.title === "Driver GIF";
  })[0];

  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "cl.DrvHeroMobile.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "cl.DrvWhyDiDi.image";
  })[0];
  const drvFeaturesImage = images.filter((image) => {
    return image.title === "cl.DrvFeatures.image";
  })[0];
  const paxCTAAppImage = images.filter((image) => {
    return image.title === "cl.PaxCTAApp.image";
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
      <DrvVideoGrid></DrvVideoGrid>
      <DrvBanner></DrvBanner>
      <DrvFeatures image={drvFeaturesImage}></DrvFeatures>
      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <Requirements data={products}></Requirements>
      <PaxCTAApp image={paxCTAAppImage}></PaxCTAApp>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
      <DrvCityList data={cities}></DrvCityList>
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
            "cl.DrvHero.bgImage"
            "cl.DrvHeroMobile.bgImage"
            "cl.DrvWhyDiDi.image"
            "cl.DrvFeatures.image"
            "cl.PaxCTAApp.image"
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
        country: { elemMatch: { code: { eq: "cl" } } }
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
      filter: { country: { code: { eq: "cl" } } }
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
