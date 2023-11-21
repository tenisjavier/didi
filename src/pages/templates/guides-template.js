import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuideHero from "../../components/sections/GuideHero";
import GuideHeroRestaurant from "../../components/sections/GuideHeroRestaurant";
import GuideHeroDelivery from "../../components/sections/GuideHeroDelivery";
import RichContent from "../../components/RichContent";
import PaxBanner from "../../components/sections/PaxBanner";
import PaxBannerDelivery from "../../components/sections/PaxBannerDelivery";
import PaxBannerRestaurant from "../../components/sections/PaxBannerRestaurant";
import GuidesColumns from "../../components/sections/GuidesColumns";
import FoodBusinessGuideColumns from "../../components/sections/FoodBusinessGuideColumns";
import FoodDeliveryGuideColumns from "../../components/sections/FoodDeliveryGuideColumns";

const GuideTemplate = ({ data, pageContext }) => {
  const richContent = data.contentfulGuide.content;
  const title = data.contentfulGuide.seoTitle;
  const desc = data.contentfulGuide.seoDescription;
  const heroImage = data.contentfulGuide;

  const category = data.contentfulGuide.category[0];

  let GuideHeroToRender;
  let GuideColumnsToRender;
  let BannerToRender;

  switch (category) {
    case "delivery":
      GuideHeroToRender = (
        <GuideHeroDelivery data={heroImage}></GuideHeroDelivery>
      );
      GuideColumnsToRender = (
        <FoodDeliveryGuideColumns data={data}></FoodDeliveryGuideColumns>
      );
      BannerToRender = <PaxBannerDelivery></PaxBannerDelivery>;
      break;
    case "restaurant":
      GuideHeroToRender = (
        <GuideHeroRestaurant data={heroImage}></GuideHeroRestaurant>
      );
      GuideColumnsToRender = (
        <FoodBusinessGuideColumns data={data}></FoodBusinessGuideColumns>
      );
      BannerToRender = <PaxBannerRestaurant></PaxBannerRestaurant>;
      break;
    default:
      GuideHeroToRender = <GuideHero data={heroImage}></GuideHero>;
      GuideColumnsToRender = <GuidesColumns data={data}></GuidesColumns>;
      BannerToRender = <PaxBanner></PaxBanner>;
      break;
  }

  return (
    <Layout title={title} desc={desc}>
      {GuideHeroToRender}
      {BannerToRender}
      {GuideColumnsToRender}
    </Layout>
  );
};

export default GuideTemplate;

export const query = graphql`
  query ($id: String, $countryCode: String, $category: [String]) {
    contentfulGuide(id: { eq: $id }) {
      title
      excerpt
      category
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
      featuredImageMobile {
        gatsbyImageData
      }
      btnCustomLink
      btnCustomText
    }
    allContentfulGuide(
      filter: {
        category: { in: $category }
        id: { ne: $id }
        country: { code: { eq: $countryCode } }
      }
      sort: { updatedAt: DESC }
      limit: 15
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
        category
      }
    }
  }
`;
