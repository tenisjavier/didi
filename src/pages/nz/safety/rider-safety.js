import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyPaxHero from "../../../components/sections/SafetyPaxHero";
import SafetyGridDuringTrip from "../../../components/sections/SafetyGridDuringTrip";

const RiderSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "nz.SafetyHero.bgImage";
  })[0];
  const safetyGridPaxImages = images.filter((image) => {
    return image.title.indexOf("nz.SafetyGridPax.image") !== -1;
  });
  return (
    <Layout>
      <SafetyPaxHero bgImage={safetyHeroBgImage}></SafetyPaxHero>
      <SafetyGridDuringTrip images={safetyGridPaxImages}></SafetyGridDuringTrip>
    </Layout>
  );
};

export default RiderSafety;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(nz.SafetyGridPax)|(nz.SafetyHero)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;