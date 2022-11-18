import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutHero from "../../components/sections/AboutHero";
import AboutColumns from "../../components/sections/AboutColumns";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "pe.HomeHero.bgImage";
  })[0];
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "pe.SafetyHero.bgImage";
  })[0];
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "pe.HelpCenterHero.bgImage";
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
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "pe.HomeHero.bgImage"
            "pe.SafetyHero.bgImage"
            "pe.HelpCenterHero.bgImage"
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
