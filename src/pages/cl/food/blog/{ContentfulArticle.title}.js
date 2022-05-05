import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBlogPostHero from "../../../../components/sections/FoodBlogPostHero";
import ArticleContent from "../../../../components/sections/ArticleContent";
import FoodBlogColumns from "../../../../components/sections/FoodBlogColumns";

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <FoodBlogPostHero data={data}></FoodBlogPostHero>
      <ArticleContent data={data}></ArticleContent>
      <FoodBlogColumns data={data}></FoodBlogColumns>
    </Layout>
  );
};

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
        category: { eq: "food" }
        country: { code: { eq: "cl" } }
        id: { ne: $id }
      }
    ) {
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

export default ArticleTemplate;
