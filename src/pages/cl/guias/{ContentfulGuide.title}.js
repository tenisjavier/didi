import React from "react";
import Layout from "../../../components/Layout";
import GuideHero from "../../../components/sections/GuideHero";
import { graphql } from "gatsby";
import RichContent from "../../../components/sections/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
// import { getCountryCodeFromUrl } from "../../../../config/countries-config";

export const query = graphql`
  query ($id: String) {
    contentfulGuide(id: { eq: $id }) {
      title
      excerpt
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
      featuredImage {
        gatsbyImageData
      }
    }
  }
`;

const GuideTemplate = ({ data }) => {
  return (
    <Layout>
      <GuideHero data={data}></GuideHero>
      <RichContent data={data}></RichContent>
      <PaxBanner></PaxBanner>
    </Layout>
  );
};

export default GuideTemplate;
