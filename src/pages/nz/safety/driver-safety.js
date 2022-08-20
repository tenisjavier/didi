import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyDrvHero from "../../../components/sections/SafetyDrvHero";
import SafetyGridDrv from "../../../components/sections/SafetyGridDrv";

const DrvSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "nz.SafetyHero.bgImage";
  })[0];
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("nz.SafetyGridDrv.image") !== -1;
  });

  return (
    <Layout>
      <SafetyDrvHero bgImage={safetyHeroBgImage}></SafetyDrvHero>
      <SafetyGridDrv images={safetyGridDrvImages}></SafetyGridDrv>
    </Layout>
  );
};

export default DrvSafety;

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
      filter: { title: { regex: "/(nz.SafetyHero)|(nz.SafetyGridDrv)/" } }
      sort: { fields: title }
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