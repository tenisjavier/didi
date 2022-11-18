import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import HelpCenterCTA from "../../components/sections/HelpCenterCTA";
import AboutGlobalCTA from "../../components/sections/AboutGlobalCTA";
import AboutCountryCTA from "../../components/sections/AboutCountryCTA";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ec.AboutHero.bgImage";
  })[0];

  const HelpCenterCTAImage = images.filter((image) => {
    return image.title === "ec.HelpCenterHero.bgImage";
  })[0];

  const AboutGlobalCTAImage = images.filter((image) => {
    return image.title === "ec.HelloCTA.image";
  })[0];

  const AboutCountryCTAImage = images.filter((image) => {
    return image.title === "ec.CountryCTA.image";
  })[0];

  return (
    <Layout>
      <AboutHero bgImage={homeHeroBgImage}></AboutHero>
      <AboutGlobalCTA
        image={AboutGlobalCTAImage}
        bullets={false}
      ></AboutGlobalCTA>
      <AboutCountryCTA
        image={AboutCountryCTAImage}
        bullets={false}
      ></AboutCountryCTA>
      <HelpCenterCTA image={HelpCenterCTAImage}></HelpCenterCTA>
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
            "ec.AboutHero.bgImage"
            "ec.HelloCTA.image"
            "ec.AboutCTA.image"
            "ec.CountryCTA.image"
            "ec.SafetyHero.bgImage"
            "ec.HelpCenterHero.bgImage"
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
