import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import TermsAndConditionsContent from "../../../components/sections/TermsAndConditionsContent";

const TermsAndConditions = ({ data }) => {
  return (
    <Layout>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulLegal(id: { eq: $id }) {
      content {
        raw
      }
    }
  }
`;

export default TermsAndConditions;
