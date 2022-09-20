import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyDrvCTA from "../../components/sections/SafetyDrvCTA";
import SafetyPaxCTA from "../../components/sections/SafetyPaxCTA"

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "mx.SafetyHero.bgImage";
  })[0];
  const safetyDrvImage = images.filter((image) => {
    return image.title === "mx.DrvSafety.image";
  })[0];
  const safetyPaxImage = images.filter((image) => {
    return image.title === "mx.PaxSafety.image";
  })[0];
  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyDrvCTA image={safetyDrvImage}></SafetyDrvCTA>
      <SafetyPaxCTA image={safetyPaxImage}></SafetyPaxCTA>
    </Layout>
  );
};

export default Seguridad;

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
      filter: { title: { regex: "/(mx.SafetyHero.bgImage)|(mx.PaxSafety.image)|(mx.DrvSafety.image)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
