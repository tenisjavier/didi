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
import SmsCTA from "../../components/sections/SmsCTA"
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const ArticlesTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.nodes;
  const title = data.contentfulArticle.seoTitle;
  const desc = data.contentfulArticle.seoDescription;
  const category = data.contentfulArticle.category;
  const { pathname } = useLocation();

  const [QRUrl, setQRUrl] = useState(
    "https://global-food-eater.onelink.me/4B2F/QRCODE"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
    ></QRCodeSVG>
  );

  const images = data.allContentfulAsset.nodes


  const foodSMSCTA = images.filter((image) => {
    return image.title === "mx.FoodSMSCTA.image";
  })[0];

  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

  let hero = <ArticleHero data={data}></ArticleHero>;
  let banner = <PaxBanner></PaxBanner>;
  let columns = <ArticlesColumns data={data}></ArticlesColumns>;
  let smsCTA
  let foodAppDownloads

  if (pathname.includes("newsroom"))
    columns = <NewsroomColumns data={data}></NewsroomColumns>;
  if (pathname.includes("food/blog")) {
    foodAppDownloads = <div className="block lg:hidden xl:hidden"><FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads></div>
    smsCTA = <div className="hidden lg:block xl:block"><SmsCTA qr={qr} image={foodSMSCTA}></SmsCTA></div>
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
  if (pathname.includes("thejourney") || pathname.includes("coronavirus")) {
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
      {smsCTA && smsCTA}
      {foodAppDownloads && foodAppDownloads}
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
      filter: { title: { in: ["hk.ArticleOfferColumns.image", "mx.FoodSMSCTA.image", "mx.FoodDeliveryDownloads.image"] } }
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
      authorRole
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
