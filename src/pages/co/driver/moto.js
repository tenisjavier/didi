import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvMotoHero from "../../../components/sections/DrvMotoHero";
import DrvColumns from "../../../components/sections/DrvColumns";
import HomeColumns from "../../../components/sections/PaxColumns";
import Requirements from "../../../components/sections/Requirements";
import SafetyCTA from "../../../components/sections/SafetyCTA";
import HelpCenterFAQ from "../../../components/sections/HelpCenterFAQ";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "co.DrvMotoHero.bgImage";
  })[0];

  const drvColumnsImage = images.filter((image) => {
    return image.title === "do.DrvColumns.image";
  });

  const safetyCTAImage = images.filter((image) => {
    return image.title === "co.SafetyCTA.image";
  })[0];

  const products = data.allContentfulProduct.nodes;

  return (
    <Layout>
      <DrvMotoHero bgImage={drvHeroBgImage}></DrvMotoHero>
      <DrvColumns images={drvColumnsImage.reverse()}></DrvColumns>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <HelpCenterFAQ data={products[0]}></HelpCenterFAQ>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.DrvMotoHero.bgImage"
            "do.DrvColumns.image"
            "co.SafetyCTA.image"
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
        name: { eq: "DiDi Moto Colombia" }
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
