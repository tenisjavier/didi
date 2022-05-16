import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LegalHero from "../../../components/sections/LegalHero";
import LegalCTA from "../../../components/sections/LegalCTA";

const Legal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "pe.HomeHero.bgImage";
  })[0];
  const legalCTAImage = images.filter((image) => {
    return image.title === "pe.PaxCTA.image";
  })[0];

  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      <LegalCTA image={legalCTAImage}></LegalCTA>
    </Layout>
  );
};

export default Legal;

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
      filter: { title: { in: ["pe.HomeHero.bgImage", "pe.PaxCTA.image"] } }
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
