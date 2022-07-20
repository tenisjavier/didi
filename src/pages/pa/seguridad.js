import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyColumns from "../../components/sections/SafetyColumns";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const columnsImages = [];

  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "pa.SafetyHero.bgImage";
  })[0];

  const safetyColumnsImage = images.filter((image) => {
    if(image.title === "pa.SafetyColumns.image") {
      columnsImages.push(image);
    }
    return image.title === "pa.SafetyColumns.image";
  })[0];

  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyColumns images={columnsImages.reverse()}></SafetyColumns>
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
      filter: {
        title: {
          in: [
            "pa.SafetyHero.bgImage"
            "pa.SafetyColumns.image"
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
  }
`;