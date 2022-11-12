import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodHero from "../../../components/sections/FoodHero";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";

const Food = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "cl.FoodHero.bgImage";
  })[0];
  const foodColumnsImages = images.filter((image) => {
    return image.title.indexOf("cl.FoodColumns.image") !== -1;
  });
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "cl.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "cl.FoodDeliveryCTA.image";
  })[0];
  return (
    <Layout>
      <FoodHero bgImage={foodHeroBgImage}></FoodHero>
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {ns: {in: ["food"]}, language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(cl.FoodHero.bgImage)|(cl.FoodColumns.image)|(cl.FoodBusinessCTA.image)|(cl.FoodDeliveryCTA.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
