import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyColumns from "../../components/sections/SafetyColumns";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "cr.SafetyHero.bgImage";
  })[0];

  const safetyColumnsImage = images.filter((image) => {
    return image.title === "cr.SafetyColumns.image";
  });

  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyColumns images={safetyColumnsImage.reverse()}></SafetyColumns>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["cr.SafetyHero.bgImage", "cr.SafetyColumns.image"] }
      }
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
