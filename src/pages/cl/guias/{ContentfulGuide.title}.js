import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import GuideHero from "../../../components/sections/GuideHero";
import RichContent from "../../../components/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import GuidesColumns from "../../../components/sections/GuidesColumns";

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
      <section className="text-gray-primary container mx-auto mb-32 md:px-28">
        <RichContent richContent={richContent}></RichContent>
      </section>

      <PaxBanner></PaxBanner>
      <GuidesColumns data={data}></GuidesColumns>
    </Layout>
  );
};

export default GuideTemplate;
