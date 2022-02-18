import React from "react";
import Layout from "../../../components/Layout";
import ArticleHero from "../../../components/sections/ArticleHero";
import { graphql } from "gatsby";
import RichContent from "../../../components/sections/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";

export const query = graphql`
  query ($id: String) {
    contentfulArticle(id: { eq: $id }) {
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
    allContentfulArticle {
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

const ArticleTemplate = ({ data }) => {
  const richContent = data.contentfulArticle.content;
  return (
    <Layout>
      <ArticleHero data={data}></ArticleHero>
      <section className="text-gray-primary container mb-32">
        <RichContent richContent={richContent}></RichContent>
      </section>

      <PaxBanner></PaxBanner>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default ArticleTemplate;
