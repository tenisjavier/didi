import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import HelpCenterHero from "../../../components/sections/HelpCenterHero";
import HelpCenterFAQDrv from "../../../components/sections/HelpCenterFAQDrv";

const HelpCenter = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "nz.HelpCenterHero.bgImage";
  })[0];

  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express New Zealand"
  );

  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
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
        title: { regex: "/(nz.HelpCenterHero.bgImage)/" }
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
      filter: { country: { elemMatch: { code: { eq: "nz" } } } }
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
