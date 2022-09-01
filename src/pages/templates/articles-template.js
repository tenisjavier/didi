import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ArticleHero from "../../components/sections/ArticleHero";
import ArticleContent from "../../components/sections/ArticleContent";
import PaxBanner from "../../components/sections/PaxBanner";
import ArticlesColumns from "../../components/sections/ArticlesColumns";

const ArticlesTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <ArticleHero data={data}></ArticleHero>
      <ArticleContent data={data}></ArticleContent>
      <PaxBanner></PaxBanner>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default ArticlesTemplate;

export const query = graphql`
  query (
    $id: String
    $category: String
    $countryCode: String
    $language: String!
  ) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
    allContentfulArticle(
      filter: {
        category: { eq: $category }
        country: { code: { eq: $countryCode } }
        id: { ne: $id }
      }
      sort: { fields: content___references___createdAt, order: DESC }
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
