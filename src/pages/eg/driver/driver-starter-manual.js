import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ContentHeroRTL from "../../../components/sections/ContentHeroRTL";
import InfoContent from "../../../components/sections/InfoContent";

const Driver = () => {
  return (
    <Layout>
      <ContentHeroRTL></ContentHeroRTL>
      <InfoContent></InfoContent>
    </Layout>
  );
};

export default Driver;

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
  }
`;
