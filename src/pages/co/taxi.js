import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import Requirements from "../../components/sections/Requirements";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "co.TaxiHero.bgImage";
  })[0];
  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "co.TaxiWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;

  return (
    <Layout>
      <TaxiHero bgImage={taxiHeroBgImage}></TaxiHero>
      <TaxiWhyDidi image={taxiWhyDiDiImage}></TaxiWhyDidi>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["translation"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: { title: { in: ["co.TaxiHero.bgImage", "co.TaxiWhyDiDi.image"] } }
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
        name: { eq: "DiDi Taxi Colombia" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Taxi;
