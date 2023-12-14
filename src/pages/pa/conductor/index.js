import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
import DrvWhyDiDi from "../../../components/sections/DrvWhyDiDi";
import HomeColumns from "../../../components/sections/PaxColumns";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";
import DrvFeatures from "../../../components/sections/DrvFeatures";
import SilderSection from "../../../components/sections/SliderSection";
import DrvBanner from "../../../components/sections/DrvBanner";
import DrvCityList from "../../../components/sections/DrvCityList";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "pa.DrvHero.bgImage";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.DrvHeroMobile.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "pa.DrvWhyDiDi.image";
  })[0];
  const drvFeaturesImage = images.filter((image) => {
    return image.title === "pa.DrvFeatures.image";
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
      <DrvBanner></DrvBanner>
      <DrvFeatures image={drvFeaturesImage}></DrvFeatures>
      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <Requirements data={products}></Requirements>
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
            "pa.DrvHero.bgImage"
            "pa.DrvHeroMobile.bgImage"
            "pa.DrvWhyDiDi.image"
            "pa.DrvFeatures.image"
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
        country: { elemMatch: { code: { eq: "pa" } } }
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
      filter: { country: { code: { eq: "pa" } } }
      sort: { name: ASC }
    ) {
      nodes {
        contentful_id
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
