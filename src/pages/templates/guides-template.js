import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuideHero from "../../components/sections/GuideHero";
import RichContent from "../../components/RichContent";
import PaxBanner from "../../components/sections/PaxBanner";
import GuidesColumns from "../../components/sections/GuidesColumns";

const GuideTemplate = ({ data }) => {
  const richContent = data.contentfulGuide.content;
  return (
    <Layout>
      <GuideHero data={data}></GuideHero>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={richContent}></RichContent>
      </section>

      <PaxBanner></PaxBanner>
      <GuidesColumns data={data}></GuidesColumns>
    </Layout>
  );
};

export default GuideTemplate;

export const query = graphql`
  query ($id: String, $countryCode: String, $language: String!) {
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
    allContentfulGuide(
      filter: { country: { code: { eq: $countryCode } }, id: { ne: $id } }
      sort: { fields: updatedAt, order: DESC }
      limit: 10
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
