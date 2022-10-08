import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import RestaurantHeroImpuesto from "../../../../components/sections/RestaurantHeroImpuesto";
import RestaurantImpuestosColumns from "../../../../components/sections/RestaurantImpuestosColumns";
import ImpuestosColumns from "../../../../components/sections/ImpuestosColumns";

const Restaurant = ({ data }) => {
  console.log(data);
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroImpuesto.bgImage";
  })[0];
  const impuestosImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantImpuesto.image") !== -1;
  });
  const impuestoColumnImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantImpuestosColumn.image") !== -1;
  });

  return (
    <Layout>
      <RestaurantHeroImpuesto
        bgImage={RestaurantHeroBgImage}
      ></RestaurantHeroImpuesto>
      <ImpuestosColumns images={impuestoColumnImages}></ImpuestosColumns>
      <RestaurantImpuestosColumns
        images={impuestosImages.reverse()}
      ></RestaurantImpuestosColumns>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["food"] }, language: { eq: $language } }
    ) {
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
          regex: "/(mx.RestaurantHeroImpuesto.bgImage)|(mx.DiDiRestaurantImpuesto.image)|(mx.DiDiRestaurantImpuestosColumn.image)/"
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
