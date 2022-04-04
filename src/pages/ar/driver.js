import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/ar/DrvHero";
import DrvWhyDiDi from "../../components/ar/DrvWhyDiDi";
import DrvVideoGrid from "../../components/ar/DrvVideoGrid";
import DrvBanner from "../../components/ar/DrvBanner";
import DrvFeatures from "../../components/ar/DrvFeatures";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/ar/Requirements";
import KnowMoreBanner from "../../components/ar/KnowMoreBanner";
import DrvCityList from "../../components/ar/DrvCityList";
import HomeColumns from "../../components/sections/HomeColumns";

const Driver = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  const country = data.contentfulCountry.name;
  const cities = data.contentfulCountry.city;

  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvWhyDiDi></DrvWhyDiDi>
      <DrvVideoGrid></DrvVideoGrid>
      <DrvBanner></DrvBanner>

      <DrvFeatures></DrvFeatures>
      <SilderSection
        data={products}
        title="Hay un DiDi para vos"
      ></SilderSection>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
      <DrvCityList
        data={cities}
        title={"Operamos en las siguientes ciudades en " + country}
        desc={
          "Descubre las ciudades de " + country + " donde esta operando Didi"
        }
      ></DrvCityList>
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "ar" } } }
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
    contentfulCountry(code: { eq: "ar" }) {
      name
      city {
        name
      }
    }
  }
`;
