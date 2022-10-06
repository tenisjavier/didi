import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../../components/Layout";
import RestaurantHeroKitDigital from "../../../../../../components/sections/RestaurantHeroKitDigital";
import MidiaKitColumns from '../../../../../../components/sections/MidiaKitColumns'

const Restaurant = ({ data }) => {

  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroKitDigital.bgImage";
  })[0];
  const impuestoColumnImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantImpuestosColumn.image") !== -1;
  })

  return (
    <Layout>
      <RestaurantHeroKitDigital bgImage={RestaurantHeroBgImage}></RestaurantHeroKitDigital>
      <MidiaKitColumns></MidiaKitColumns>
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
