import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import ArticleHero from "../../components/sections/ArticleHero";
import FoodBlogPostHero from "../../components/sections/FoodBlogPostHero";
import DiDiPayArticleHero from "../../components/sections/DiDiPayArticleHero";
import ArticleContent from "../../components/sections/ArticleContent";
import PaxBanner from "../../components/sections/PaxBanner";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import NewsroomColumns from "../../components/sections/NewsroomColumns";
import FoodBlogColumns from "../../components/sections/FoodBlogColumns";
import DiDiPayBlogColumns from "../../components/sections/DiDiPayBlogColumns";

const ArticlesTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const { pathname } = useLocation();
  let hero = <ArticleHero data={data}></ArticleHero>;
  let columns = <ArticlesColumns data={data}></ArticlesColumns>;
  if (pathname.includes("newsroom"))
    columns = <NewsroomColumns data={data}></NewsroomColumns>;
  if (pathname.includes("food/blog"))
    hero = <FoodBlogPostHero data={data}></FoodBlogPostHero>;
  columns = <FoodBlogColumns data={data}></FoodBlogColumns>;
  if (pathname.includes("didipay/blog"))
    hero = <DiDiPayArticleHero data={data}></DiDiPayArticleHero>;
  columns = <DiDiPayBlogColumns data={data}></DiDiPayBlogColumns>;

  return (
    <Layout>
      {hero}
      <ArticleContent data={data}></ArticleContent>
      {!(
        pathname.includes("food/blog") || pathname.includes("didipay/blog")
      ) && <PaxBanner></PaxBanner>}
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
      sort: { fields: updatedAt, order: DESC }
      limit: 20
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
