import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBusinessGuideHero from "../../../../components/sections/FoodBusinessGuideHero";
import PaginationSEO from "../../../../components/PaginationSEO";
import FoodBusinessGuideColumns from "../../../../components/sections/FoodBusinessGuideColumns";

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
      <FoodBusinessGuideHero
        bgImage={guidesHeroBgImage}
        mobileBgImage={guidesHeroMobileBgImage}
      ></FoodBusinessGuideHero>
      <FoodBusinessGuideColumns data={data}></FoodBusinessGuideColumns>
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
      filter: {
        category: { eq: "restaurant" }
        country: { code: { eq: "mx" } }
      }
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
