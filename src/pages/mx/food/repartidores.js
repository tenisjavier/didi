import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodDeliveryColumns from "../../../components/sections/FoodDeliveryColumns";
import FoodDeliveryDownloads from "../../../components/sections/FoodDeliveryDownloads";
import FoodDeliveryStepsColumns from "../../../components/sections/FoodDeliveryStepsColumns";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodDeliveryHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  const foodDeliveryColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryColumns.image") !== -1;
  });
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  return (
    <Layout>
      <FoodDeliveryHero bgImage={foodDeliveryHeroBgImage}></FoodDeliveryHero>
      <FoodDeliveryColumns
        images={foodDeliveryColumnsImages}
      ></FoodDeliveryColumns>
      <FoodDeliveryStepsColumns></FoodDeliveryStepsColumns>
      <FoodDeliveryDownloads
        images={foodDeliveryDownloadsImages}
      ></FoodDeliveryDownloads>
    </Layout>
  );
};

export default FoodDelivery;

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
          regex: "/(mx.FoodDeliveryHero.bgImage)|(mx.FoodDeliveryColumns.image)|(mx.FoodDeliveryDownloads.image)/"
        }
      }
      sort: { fields: title }
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
