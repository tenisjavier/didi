import React from "react";
import Layout from "../../../components/Layout";
import GuideHero from "../../../components/sections/GuideHero";
import { graphql } from "gatsby";
import RichContent from "../../../components/sections/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import GuidesColumns from "../../../components/sections/GuidesColumns";

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
    allContentfulGuide {
      nodes {
        title
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;

const GuideTemplate = ({ data }) => {
  const richContent = data.contentfulGuide.content;
  return (
    <Layout>
      <GuideHero data={data}></GuideHero>
      <section className="text-gray-primary container mb-32">
        <RichContent richContent={richContent}></RichContent>
      </section>

      <PaxBanner></PaxBanner>
      <GuidesColumns data={data}></GuidesColumns>
    </Layout>
  );
};

export default GuideTemplate;
