import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import DrvBanner from "../../components/sections/DrvBanner";
import DrvFeatures from "../../components/sections/DrvFeatures";
import HomeColumns from "../../components/sections/PaxColumns";
import DrvCityList from "../../components/sections/DrvCityList";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.DrvHero.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "co.DrvWhyDiDi.image";
  })[0];
  const drvFeaturesImage = images.filter((image) => {
    return image.title === "co.DrvFeatures.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.contentfulCountry.city;

  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
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
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.DrvHero.bgImage"
            "co.DrvWhyDiDi.image"
            "co.DrvFeatures.image"
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
    contentfulCountry(code: { eq: "co" }) {
      city {
        name
        slug
      }
    }
  }
`;
