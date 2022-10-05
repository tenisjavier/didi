import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../../components/Layout";
import TermsAndConditionsContent from "../../../../../../components/sections/TermsAndConditionsContent";

const Privacy = ({ data }) => {
  return (
    <Layout>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
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
    contentfulLegal(name: { eq: "Constancia de Situación Fiscal" }) {
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
`;

export default Privacy;