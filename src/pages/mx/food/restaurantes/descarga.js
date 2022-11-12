import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import RestaurantHero from "../../../../components/sections/RestaurantHero";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHero.bgImage";
  })[0];
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
      <RestaurantHero bgImage={RestaurantHeroBgImage}></RestaurantHero>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
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
    filter: {title: {regex: "/(mx.RestaurantHero.bgImage)|(mx.FoodBusinessDownloads.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulProduct(
    filter: {country: {elemMatch: {code: {eq: "cl"}}}, category: {eq: "food"}, name: {eq: "Food Business"}}
  ) {
    nodes {
      name
      phone
      requirement {
        raw
      }
    }
  }
}`;
