import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHeroRTL from "../../components/sections/AboutHeroRTL";
import AboutCountryCTARTL from "../../components/sections/AboutCountryCTARTL";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "eg.AboutHero.bgImage";
  })[0];

  const AboutCountryCTAImage = images.filter((image) => {
    return image.title === "eg.CountryCTA.image";
  })[0];

  return (
    <Layout>
      <AboutHeroRTL bgImage={homeHeroBgImage}></AboutHeroRTL>
      <AboutCountryCTARTL
        image={AboutCountryCTAImage}
        bullets={false}
      ></AboutCountryCTARTL>
    </Layout>
  );
};

export default SobreDiDi;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "eg.AboutHero.bgImage"
            "eg.SafetyHero.bgImage"
            "eg.CountryCTA.image"
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
