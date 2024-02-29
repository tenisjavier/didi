import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiExpressPlusLegal from "../../../components/sections/expressPlus/DiDiExpressPlusLegal";

const ganaConDidi = ({ data }) => {
  const content = data?.contentfulLegal?.content;
  return (
    <Layout>
      {content && (
        <DiDiExpressPlusLegal content={content}></DiDiExpressPlusLegal>
      )}
    </Layout>
  );
};

export default ganaConDidi;

export const query = graphql`
  query {
    contentfulLegal(
      name: { eq: "Legal DiDivulgativa Usuarios Colombia" }
      country: { elemMatch: { code: { eq: "co" } } }
    ) {
      name
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;
