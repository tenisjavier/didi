import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import TermsAndConditionsContent from "../../../../components/sections/TermsAndConditionsContent";

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
    contentfulLegal(name: { eq: "Términos y Condiciones DiDi Food Costa Rica" }) {
      content {
        raw
      }
    }
  }
`;

export default Privacy;