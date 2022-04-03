import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticleHero from "../../../components/ar/ArticleHero";
import ArticleContent from "../../../components/ar/ArticleContent";
import PaxBanner from "../../../components/ar/PaxBanner";
import ArticlesColumns from "../../../components/ar/ArticlesColumns";

export const query = graphql`
  query ($id: String) {
    contentfulArticle(id: { eq: $id }) {
      title
      excerpt
      updatedAt
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
  return (
    <Layout>
      <ArticleHero data={data}></ArticleHero>
      <ArticleContent data={data}></ArticleContent>
      <PaxBanner></PaxBanner>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default ArticleTemplate;
