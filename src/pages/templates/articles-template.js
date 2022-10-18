import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import ArticleHero from "../../components/sections/ArticleHero";
import ArticleContent from "../../components/sections/ArticleContent";
import PaxBanner from "../../components/sections/PaxBanner";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import NewsroomColumns from "../../components/sections/NewsroomColumns";
import FoodBlogColumns from "../../components/sections/FoodBlogColumns";

const ArticlesTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const { pathname } = useLocation();
  let columns = <ArticlesColumns data={data}></ArticlesColumns>;
  if (pathname.includes("newsroom"))
    columns = <NewsroomColumns data={data}></NewsroomColumns>;
  if (pathname.includes("food/blog"))
    columns = <FoodBlogColumns data={data}></FoodBlogColumns>;

  return (
    <Layout>
      <ArticleHero data={data}></ArticleHero>
      <ArticleContent data={data}></ArticleContent>
      <PaxBanner></PaxBanner>
      {articles.length && columns}
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
