import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import AboutGlobalCTA from "../../components/sections/AboutGlobalCTA";
import AboutCountryCTA from "../../components/sections/AboutCountryCTA";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const homeHeroBgImage = images.filter((image) => {
    return image.title === "do.AboutHero.bgImage";
  })[0];

  const AboutGlobalCTAImage = images.filter((image) => {
    return image.title === "do.HelloCTA.image";
  })[0];

  const AboutCountryCTAImage = images.filter((image) => {
    return image.title === "do.CountryCTA.image";
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
      {/* <AboutColumns images={columnsImages}></AboutColumns> */}
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
            "do.AboutHero.bgImage"
            "do.HelloCTA.image"
            "do.CountryCTA.image"
            "do.SafetyHero.bgImage"
            "do.HelpCenterHero.bgImage"
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
