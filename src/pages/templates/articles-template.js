import { useLocation } from "@reach/router";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import ArticleContent from "../../components/sections/ArticleContent";
import ArticleHero from "../../components/sections/ArticleHero";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import DiDiPayArticleHero from "../../components/sections/DiDiPayArticleHero";
import DiDiPayBlogColumns from "../../components/sections/DiDiPayBlogColumns";
import FoodBlogPostHero from "../../components/sections/FoodBlogPostHero";
import CourierBlogPostHero from "../../components/sections/CourierBlogPostHero";
import NewsroomColumns from "../../components/sections/NewsroomColumns";
import PaxBanner from "../../components/sections/PaxBanner";
import RelatedFoodBlogColumns from "../../components/sections/RelatedFoodBlogColumns";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";

const ArticlesTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const title = data.contentfulArticle.seoTitle;
  const desc = data.contentfulArticle.seoDescription;
  const category = data.contentfulArticle.category;
  const { pathname } = useLocation();

  let hero = <ArticleHero data={data}></ArticleHero>;
  let banner = <PaxBanner></PaxBanner>;
  let columns = <ArticlesColumns data={data}></ArticlesColumns>;

  if (pathname.includes("newsroom"))
    columns = <NewsroomColumns data={data}></NewsroomColumns>;
  if (pathname.includes("food/blog")) {
    hero = <FoodBlogPostHero data={data}></FoodBlogPostHero>;
    banner = null;
    columns = (
      <RelatedFoodBlogColumns
        data={data}
        tags={data.contentfulArticle.tags}
      ></RelatedFoodBlogColumns>
    );
  }
  if (pathname.includes("didipay/blog")) {
    hero = <DiDiPayArticleHero data={data}></DiDiPayArticleHero>;
    banner = <DiDiPayColumns></DiDiPayColumns>;
    columns = <DiDiPayBlogColumns data={data}></DiDiPayBlogColumns>;
  }
  if (pathname.includes("coronavirus")) {
    banner = null;
  }

  if (category[0] === "food-courier") {
    hero = <CourierBlogPostHero data={data}></CourierBlogPostHero>;
    banner = null;
    columns = (
      <RelatedFoodBlogColumns
        data={data}
        tags={data.contentfulArticle.tags}
      ></RelatedFoodBlogColumns>
    );
  }

  return (
    <Layout title={title} desc={desc}>
      {hero}
      <ArticleContent data={data}></ArticleContent>
      {banner && banner}
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
    $language: String
    $tag: String
  ) {
    allContentfulAsset(
      filter: { title: { in: ["hk.ArticleOfferColumns.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulArticle(id: { eq: $id }) {
      title
      excerpt
      category
      author
      updatedAt
      tags {
        name
      }
      seoTitle
      seoDescription
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData
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
        language: { eq: $language }
        category: { eq: $category }
        country: { code: { eq: $countryCode } }
        id: { ne: $id }
        tags: { elemMatch: { name: { eq: $tag } } }
      }
      sort: { updatedAt: DESC }
      limit: 20
    ) {
      nodes {
        title
        slug
        category
        tags {
          name
        }
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
