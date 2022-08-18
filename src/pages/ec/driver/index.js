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

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ec.DrvHero.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "ec.DrvWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.contentfulCountry.city;

  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <Requirements data={products}></Requirements>
      <DrvWhyDiDi image={drvWhyDiDiImage}></DrvWhyDiDi>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
      {cities != null && <DrvCityList data={cities}></DrvCityList>}
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
            "ec.DrvHero.bgImage"
            "ec.DrvWhyDiDi.image"
            "ec.DrvFeatures.image"
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
        country: { elemMatch: { code: { eq: "ec" } } }
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
    contentfulCountry(code: { eq: "ec" }) {
      city {
        name
        slug
      }
    }
  }
`;
