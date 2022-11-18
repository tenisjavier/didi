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
  query {
    contentfulLegal(name: { eq: "¿En qué consiste la Ley  Nº 21.431?" }) {
      content {
        raw
      }
    }
  }
`;

export default TermsAndConditions;
