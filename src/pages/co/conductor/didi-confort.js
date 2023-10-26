import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvConfortHero from "../../../components/sections/DrvConfortHero";
import DrvConfortFeatures from "../../../components/sections/DrvConfortFeatures";
import Requirements from "../../../components/sections/Requirements";
import SafetyCTAConfort from "../../../components/sections/SafetyCTAConfort";
import HelpCenterFAQ from "../../../components/sections/HelpCenterFAQ";

const DiDiConfort = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.DrvHero.bgImage";
  })[0];

  const safetyCTAImage = images.filter((image) => {
    return image.title === "co.SafetyCTA.image";
  })[0];

  const flexFeaturesImage = images.filter((image) => {
    return image.title === "co.DrvFlexFeatures.image";
  })[0];

  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <DrvConfortHero bgImage={drvHeroBgImage}></DrvConfortHero>
      <DrvConfortFeatures image={flexFeaturesImage}></DrvConfortFeatures>
      <Requirements
        title="Requisitos DiDi Confort"
        data={products}
      ></Requirements>
      <SafetyCTAConfort image={safetyCTAImage}></SafetyCTAConfort>
      <HelpCenterFAQ data={products[0]}></HelpCenterFAQ>
    </Layout>
  );
};

export default DiDiConfort;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.DrvHero.bgImage"
            "do.DrvColumns.image"
            "co.SafetyCTA.image"
            "co.DrvFlexFeatures.image"
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
        country: { elemMatch: { code: { eq: "co" } } }
        name: { eq: "DiDi Confort Colombia" }
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
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
