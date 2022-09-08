import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import HelpCenterHero from "../../../components/sections/HelpCenterHero";
import HelpCenterFAQDelivery from "../../../components/sections/HelpCenterFAQDelivery";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "ec.HelpCenterHero.bgImage";
  })[0];
  const faqDelivery = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "Food Business"
  );

  return (
    <Layout>
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDelivery data={faqDelivery[0]}></HelpCenterFAQDelivery>

    </Layout>
  );
};

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
      filter: { title: { in: ["ec.HelpCenterHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "mx" } } } }
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

export default CentroDeAyuda;
