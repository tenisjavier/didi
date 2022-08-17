import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHeroRTL from "../../components/sections/HelpCenterHeroRTL";
import HelpCenterFAQDrvRTL from "../../components/sections/HelpCenterFAQDrvRTL";

const HelpCenter = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "eg.HomeHero.bgImage";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Egypt"
  );
  return (
    <Layout>
      <HelpCenterHeroRTL bgImage={helpCenterBgImage}></HelpCenterHeroRTL>
      <HelpCenterFAQDrvRTL data={faqExpress[0]}></HelpCenterFAQDrvRTL>
    </Layout>
  );
};

export default HelpCenter;

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
        title: { regex: "/(eg.HomeHero.bgImage)/" }
      }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "eg" } } } }
    ) {
      nodes {
        name
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
