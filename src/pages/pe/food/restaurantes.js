import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodBusinessColumns from "../../../components/sections/FoodBusinessColumns";
import FoodBusinessDownloads from "../../../components/sections/FoodBusinessDownloads";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "pe.FoodBusinessHero.bgImage";
  })[0];
  const foodBusinessColumnsImages = images.filter((image) => {
    return image.title.indexOf("pe.FoodBusinessColumns.image") !== -1;
  });
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("pe.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
      <FoodBusinessHero bgImage={foodHeroBgImage}></FoodBusinessHero>
      <FoodBusinessColumns images={foodBusinessColumnsImages}></FoodBusinessColumns>
      <FoodBusinessDownloads images={foodBusinessDownloadsImages}></FoodBusinessDownloads>
    </Layout>
  );
};

export default FoodBusiness;

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
    filter: {title: {regex: "/(pe.FoodBusinessHero.bgImage)|(pe.FoodBusinessColumns.image)|(pe.FoodBusinessDownloads.image)/"}}
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
