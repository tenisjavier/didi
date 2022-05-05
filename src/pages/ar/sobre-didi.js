import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import AboutColumns from "../../components/sections/AboutColumns";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ar.HomeHero.bgImage";
  })[0];
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "ar.SafetyHero.bgImage";
  })[0];
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "ar.HelpCenterHero.bgImage";
  })[0];

  const columnsImages = [safetyHeroBgImage, helpCenterBgImage];
  return (
    <Layout>
      <AboutHero bgImage={homeHeroBgImage}></AboutHero>
      <AboutColumns images={columnsImages}></AboutColumns>
    </Layout>
  );
};

export default SobreDiDi;

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
            "ar.HomeHero.bgImage"
            "ar.SafetyHero.bgImage"
            "ar.HelpCenterHero.bgImage"
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
