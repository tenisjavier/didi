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
    return image.title === "cr.FoodBusinessHero.bgImage";
  })[0];
  const foodHeroBgMobileImage = images.filter((image) => {
    return image.title === "cr.FoodBusinessHeroMobile.bgImage";
  })[0];
  const foodBusinessColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FoodBusinessColumns.image") !== -1;
  });
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("cr.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
      <FoodBusinessHero
        bgImage={foodHeroBgImage}
        mobileBgImage={foodHeroBgMobileImage}
      ></FoodBusinessHero>
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
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(cr.FoodBusinessHero.bgImage)|(cr.FoodBusinessHeroMobile.bgImage)|(cr.FoodBusinessColumns.image)|(cr.FoodBusinessDownloads.image)/"
        }
      }
      sort: { title: ASC }
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
        country: { elemMatch: { code: { eq: "cr" } } }
        category: { eq: "food" }
        name: { eq: "Food Business" }
      }
    ) {
      nodes {
        contentful_id
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;
