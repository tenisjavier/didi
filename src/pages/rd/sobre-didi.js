import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import AboutCTA from "../../components/sections/AboutCTA";
import AboutGlobalCTA from "../../components/sections/AboutGlobalCTA";
import AboutCountryCTA from "../../components/sections/AboutCountryCTA";
import AboutColumns from "../../components/sections/AboutColumns";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const homeHeroBgImage = images.filter((image) => {
    return image.title === "rd.AboutHero.bgImage";
  })[0];

  const AboutCTAImage = images.filter((image) => {
    return image.title === "rd.AboutCTA.image";
  })[0];

  const AboutGlobalCTAImage = images.filter((image) => {
    return image.title === "rd.HelloCTA.image";
  })[0];

  const AboutCountryCTAImage = images.filter((image) => {
    return image.title === "rd.CountryCTA.image";
  })[0];

  return (
    <Layout>
      <AboutHero bgImage={homeHeroBgImage}></AboutHero>
      <AboutCTA image={AboutCTAImage} bullets={false}></AboutCTA>
      <AboutGlobalCTA image={AboutGlobalCTAImage} bullets={false}></AboutGlobalCTA>
      <AboutCountryCTA image={AboutCountryCTAImage} bullets={false}></AboutCountryCTA>
      {/* <AboutColumns images={columnsImages}></AboutColumns> */}
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
            "rd.AboutHero.bgImage"
            "rd.HelloCTA.image"
            "rd.AboutCTA.image"
            "rd.CountryCTA.image"
            "rd.SafetyHero.bgImage"
            "rd.HelpCenterHero.bgImage"
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
