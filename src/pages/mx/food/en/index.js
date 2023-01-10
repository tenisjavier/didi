import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodHeroDualLinkEn from "../../../../components/sections/FoodHeroDualLinkEn";
import FoodBusinessCTAEn from "../../../../components/sections/FoodBusinessCTAEn";
import FoodColumns from "../../../../components/sections/FoodColumns";
import FoodDeliveryCTAEn from "../../../../components/sections/FoodDeliveryCTAEn";

const Food = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  return (
    <Layout>
      <FoodHeroDualLinkEn bgImage={foodHeroBgImage}></FoodHeroDualLinkEn>
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTAEn image={foodBusinessCTAImage}></FoodBusinessCTAEn>
      <FoodDeliveryCTAEn image={foodDeliveryCTAImage}></FoodDeliveryCTAEn>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)/"
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
  }
`;
