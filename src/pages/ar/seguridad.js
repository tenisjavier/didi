import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyDrvCTA from "../../components/sections/SafetyDrvCTA";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "ar.SafetyHero.bgImage";
  })[0];
  const safetyDrvImage = images.filter((image) => {
    return image.title === "mx.DrvSafety.image";
  })[0];

  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyDrvCTA image={safetyDrvImage}></SafetyDrvCTA>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.DrvSafety)|(ar.SafetyHero)/" } }
      sort: { title: ASC }
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
