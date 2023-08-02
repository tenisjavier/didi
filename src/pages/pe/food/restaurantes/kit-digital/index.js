import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import RestaurantHeroKitDigital from "../../../../../components/sections/RestaurantHeroKitDigital";
import MidiaKitColumns from "../../../../../components/sections/Food/Restaurants/MidiaKitColumns";

const Restaurant = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroKitDigital.bgImage";
  })[0];

  return (
    <Layout>
      <RestaurantHeroKitDigital
        bgImage={RestaurantHeroBgImage}
      ></RestaurantHeroKitDigital>
      <MidiaKitColumns></MidiaKitColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.RestaurantHeroKitDigital.bgImage)|(mx.DiDiRestaurantImpuesto.image)|(mx.DiDiRestaurantImpuestosColumn.image)/"
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
