import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import AboutGlobalCTA from "../../components/sections/AboutGlobalCTA";
import AboutCountryCTA from "../../components/sections/AboutCountryCTA";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.AboutHero.bgImage";
  })[0];
  const aboutGlobalImage = images.filter((image) => {
    return image.title === "mx.AboutCTA.image";
  })[0];
  const aboutCountryImage = images.filter((image) => {
    return image.title === "mx.AboutCountryCTA.image";
  })[0];

  return (
    <Layout>
      <AboutHero bgImage={homeHeroBgImage}></AboutHero>
      <AboutGlobalCTA image={aboutGlobalImage}></AboutGlobalCTA>
      <AboutCountryCTA image={aboutCountryImage}></AboutCountryCTA>
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
            "mx.AboutHero.bgImage"
            "mx.AboutCTA.image"
            "mx.AboutCountryCTA.image"
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
