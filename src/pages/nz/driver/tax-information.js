import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvTaxInfoHero from "../../../components/sections/DrvTaxInfoHero";
import DrvTaxInfoFeatures from "../../../components/sections/DrvTaxInfoFeatures";

const TaxInformation = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "au.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "au.DrvBenefits.image";
  })[0];
  return (
    <Layout>
      <DrvTaxInfoHero bgImage={drvHeroBgImage}></DrvTaxInfoHero>
      <DrvTaxInfoFeatures image={drvBenefitsImage}></DrvTaxInfoFeatures>
    </Layout>
  );
};

export default TaxInformation;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(au.DrvHero.bgImage)|(au.DrvBenefits.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
