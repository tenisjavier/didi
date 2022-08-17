import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodBusinessColumns from "../../../components/sections/FoodBusinessColumns";
import FoodBusinessDownloads from "../../../components/sections/FoodBusinessDownloads";
import Requirements from "../../../components/sections/Requirements";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const products = data.allContentfulProduct.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "co.FoodBusinessHero.bgImage";
  })[0];
  const foodBusinessColumnsImages = images.filter((image) => {
    return image.title.indexOf("co.FoodBusinessColumns.image") !== -1;
  });
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("co.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
      <FoodBusinessHero bgImage={foodHeroBgImage}></FoodBusinessHero>
      <FoodBusinessColumns
        images={foodBusinessColumnsImages}
      ></FoodBusinessColumns>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
      <Requirements data={products}></Requirements>
    </Layout>
  );
};

export default FoodBusiness;

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
          regex: "/(co.FoodBusinessHero.bgImage)|(co.FoodBusinessColumns.image)|(co.FoodBusinessDownloads.image)/"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "co" } } }
        category: { eq: "food" }
        name: { eq: "Food Business" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;
