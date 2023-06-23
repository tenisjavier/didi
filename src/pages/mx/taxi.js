import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import Requirements from "../../components/sections/Requirements";
import SafetyCTA from "../../components/sections/SafetyCTA";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "mx.TaxiHero.bgImage";
  })[0];
  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.TaxiWhyDiDi.image";
  })[0];
  const safetyCTAImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.image";
  })[0];
  const products = data.allContentfulProduct.nodes;

  return (
    <Layout index={false}>
      <TaxiHero bgImage={taxiHeroBgImage}></TaxiHero>
      <TaxiWhyDidi image={taxiWhyDiDiImage}></TaxiWhyDidi>
      <Requirements data={products}></Requirements>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.TaxiHero.bgImage"
            "mx.TaxiWhyDiDi.image"
            "mx.SafetyCTA.image"
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
        country: { elemMatch: { code: { eq: "mx" } } }
        name: { eq: "DiDi Taxi México" }
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
