import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuideHero from "../../components/sections/GuideHero";
import RichContent from "../../components/RichContent";
import PaxBanner from "../../components/sections/PaxBanner";
import GuidesColumns from "../../components/sections/GuidesColumns";

const GuideTemplate = ({ data }) => {
  const richContent = data.contentfulGuide.content;
  const title = data.contentfulGuide.seoTitle;
  const desc = data.contentfulGuide.seoDescription;
  const heroImage = data.contentfulGuide;
  return (
    <Layout title={title} desc={desc}>
      <GuideHero data={heroImage}></GuideHero>
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
  query ($id: String, $countryCode: String) {
    contentfulGuide(id: { eq: $id }, category: { ne: "delivery" }) {
      title
      excerpt
      seoTitle
      seoDescription
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
      filter: {
        category: { ne: "delivery" }
        id: { ne: $id }
        country: { code: { eq: $countryCode } }
      }
      sort: { updatedAt: DESC }
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
