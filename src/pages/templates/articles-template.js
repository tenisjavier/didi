import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import ArticleHero from "../../components/sections/ArticleHero";
import ArticleNoBtnHero from "../../components/sections/ArticleNoBtnHero";
import FoodBlogPostHero from "../../components/sections/FoodBlogPostHero";
import DiDiPayArticleHero from "../../components/sections/DiDiPayArticleHero";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";
import ArticleContent from "../../components/sections/ArticleContent";
import PaxBanner from "../../components/sections/PaxBanner";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import NewsroomColumns from "../../components/sections/NewsroomColumns";
import RelatedFoodBlogColumns from "../../components/sections/RelatedFoodBlogColumns";
import DiDiPayBlogColumns from "../../components/sections/DiDiPayBlogColumns";
import ArticleOfferColumns from "../../components/sections/ArticleOfferColumns";
//dsss
const ArticlesTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const title = data.contentfulArticle.seoTitle;
  const desc = data.contentfulArticle.seoDescription;
  const { pathname } = useLocation();
  let offerColumns;
  let banner = <PaxBanner></PaxBanner>;
  let hero = <ArticleHero data={data}></ArticleHero>;

  if (pathname.includes("/hk/coronavirus")) {
    hero = <ArticleNoBtnHero data={data}></ArticleNoBtnHero>;
    banner = null;
  }

  if (pathname.includes("/hk") && !pathname.includes("/hk/coronavirus")) {
    const images = data.allContentfulAsset.nodes;
    const articleOfferColumnsImages = images.filter((image) => {
      return image.title === "hk.ArticleOfferColumns.image";
    });
    banner = null;
    offerColumns = (
      <ArticleOfferColumns
        images={articleOfferColumnsImages.reverse()}
      ></ArticleOfferColumns>
    );
  }

  let columns = <ArticlesColumns data={data}></ArticlesColumns>;
  if (pathname.includes("newsroom"))
    columns = <NewsroomColumns data={data}></NewsroomColumns>;
  if (pathname.includes("food/blog")) {
    hero = <FoodBlogPostHero data={data}></FoodBlogPostHero>;
    columns = (
      <RelatedFoodBlogColumns
        data={data}
        tags={data.contentfulArticle.tags}
      ></RelatedFoodBlogColumns>
    );
    banner = null;
  }
  if (pathname.includes("didipay/blog")) {
    hero = <DiDiPayArticleHero data={data}></DiDiPayArticleHero>;
    columns = <DiDiPayBlogColumns data={data}></DiDiPayBlogColumns>;
    banner = <DiDiPayColumns></DiDiPayColumns>;
  }

  return (
    <Layout title={title} desc={desc}>
      {hero}
      <ArticleContent data={data}></ArticleContent>
      {pathname.includes("/hk") &&
        !pathname.includes("/hk/coronavirus") &&
        offerColumns}
      {banner}
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
