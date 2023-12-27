import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
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

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "co.DrvHeroMobile.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "co.DrvWhyDiDi.image";
  })[0];
  const drvFeaturesImage = images.filter((image) => {
    return image.title === "co.DrvFeatures.image";
  })[0];
  const paxCTAAppImage = images.filter((image) => {
    return image.title === "co.PaxCTAApp.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <DrvHero
        bgImage={drvHeroBgImage}
        mobileBgImage={drvHeroMobileBgImage}
      ></DrvHero>
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
            "co.DrvHero.bgImage"
            "co.DrvHeroMobile.bgImage"
            "co.DrvWhyDiDi.image"
            "co.DrvFeatures.image"
            "co.PaxCTAApp.image"
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
        country: { elemMatch: { code: { eq: "co" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        contentful_id
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
      filter: { country: { code: { eq: "co" } } }
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
