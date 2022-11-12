import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import HelpCenterHero from "../../../components/sections/HelpCenterHero";
import HelpCenterFAQPax from "../../../components/sections/HelpCenterFAQPax";
import HomeColumns from "../../../components/sections/HomeColumns";

const DeliveryHelp = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "au.HelpCenterHero.bgImage";
  })[0];
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Australia Rider"
  );
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });

  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default DeliveryHelp;

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
    filter: {title: {regex: "/(au.HelpCenterHero.bgImage)|(au.HomeColumns.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulProduct(filter: {country: {elemMatch: {code: {eq: "au"}}}}) {
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
}`;
