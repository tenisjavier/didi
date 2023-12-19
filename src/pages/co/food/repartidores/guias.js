import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryGuideHero from "../../../../components/sections/FoodDeliveryGuideHero";
import PaginationSEO from "../../../../components/PaginationSEO";
import FoodDeliveryGuideColumns from "../../../../components/sections/FoodDeliveryGuideColumns";

const Guias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const guias = data.allContentfulGuide.nodes;
  const guidesHeroBgImage = images.filter((image) => {
    return image.title === "mx.GuidesRepartidoresRestaurantesHero.bgImage";
  })[0];
  const guidesHeroMobileBgImage = images.filter((image) => {
    return (
      image.title === "mx.GuidesRepartidoresRestaurantesHero.mobileBgImage"
    );
  })[0];

  return (
    <Layout>
      <FoodDeliveryGuideHero
        bgImage={guidesHeroBgImage}
        mobileBgImage={guidesHeroMobileBgImage}
      ></FoodDeliveryGuideHero>
      <FoodDeliveryGuideColumns data={data}></FoodDeliveryGuideColumns>
      <PaginationSEO articles={guias} postsPerPage={20}></PaginationSEO>
    </Layout>
  );
};

export default Guias;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.GuidesRepartidoresRestaurantesHero.bgImage"
            "mx.GuidesRepartidoresRestaurantesHero.mobileBgImage"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulGuide(
      filter: { category: { eq: "delivery" }, country: { code: { eq: "co" } } }
      sort: { updatedAt: DESC }
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
