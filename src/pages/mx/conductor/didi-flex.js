import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvFlexHero from "../../../components/sections/DrvFlexHero";
import DrvFlexFeatures from "../../../components/sections/DrvFlexFeatures";
import DrvColumns from "../../../components/sections/DrvColumns";
import HomeColumns from "../../../components/sections/PaxColumns";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const DiDiFlex = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "mx.DrvHero.bgImage";
  })[0];

  const drvColumnsImage = images.filter((image) => {
    return image.title === "do.DrvColumns.image";
  });

  const flexFeaturesImage = images.filter((image) => {
    return image.title === "mx.DrvFlexFeatures.image";
  })[0];

  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <DrvFlexHero bgImage={drvHeroBgImage}></DrvFlexHero>
      <DrvFlexFeatures image={flexFeaturesImage}></DrvFlexFeatures>
      <DrvColumns images={drvColumnsImage.reverse()}></DrvColumns>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default DiDiFlex;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.DrvHero.bgImage"
            "do.DrvColumns.image"
            "mx.DrvFlexFeatures.image"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        name: { eq: "DiDi Flex México" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
  }
`;
