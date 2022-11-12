import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyGridBeforeTrip from "../../components/sections/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../components/sections/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../components/sections/SafetyGridAfterTrip";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "co.SafetyHero.bgImage";
  })[0];
  const safetyGridImages = images.filter((image) => {
    return image.title.indexOf("co.SafetyGridBeforeTrip.image") !== -1;
  });
  const safetyGridDuringTripImages = images.filter((image) => {
    return image.title.indexOf("co.SafetyGridDuringTrip.image") !== -1;
  });
  const safetyGridAfterTripImages = images.filter((image) => {
    return image.title.indexOf("co.SafetyGridAfterTrip.image") !== -1;
  });
  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyGridBeforeTrip images={safetyGridImages}></SafetyGridBeforeTrip>
      <SafetyGridDuringTrip
        images={safetyGridDuringTripImages}
      ></SafetyGridDuringTrip>
      <SafetyGridAfterTrip
        images={safetyGridAfterTripImages}
      ></SafetyGridAfterTrip>
    </Layout>
  );
};

export default Seguridad;

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
    filter: {title: {regex: "/(co.SafetyGrid)|(co.SafetyHero)/"}}
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
