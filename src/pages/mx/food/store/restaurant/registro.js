import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import RestaurantHero from "../../../../../components/sections/RestaurantHero";
import RestaurantBenefitsColumns from '../../../../../components/sections/RestaurantBenefitsColumns'
import RestaurantBenefitsUnirColumns from '../../../../../components/sections/RestaurantBenefitsUnirColumns'
import RestaurantBenefitsBanner from "../../../../../components/sections/RestaurantBenefitsBanner";



const Restaurant = ({ data }) => {

  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHero.bgImage";
  })[0];

  return (
    <Layout>
      <RestaurantHero bgImage={RestaurantHeroBgImage}></RestaurantHero>
      <RestaurantBenefitsColumns></RestaurantBenefitsColumns>
      <RestaurantBenefitsUnirColumns></RestaurantBenefitsUnirColumns>
      <RestaurantBenefitsBanner></RestaurantBenefitsBanner>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.RestaurantHero.bgImage)/"
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
  }
`;

export default Restaurant;
