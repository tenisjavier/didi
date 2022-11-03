import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodAboutHero from "../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTA from "../../../components/sections/FoodAboutDeliveryCTA";
import FoodAboutCTA from "../../../components/sections/FoodAboutCTA";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodAboutHeroBgImage = images.filter((image) => {
    return image.title === "cl.FoodAboutHero.bgImage";
  })[0];
  const foodAboutDeliveryCTAImage = images.filter((image) => {
    return image.title === "cl.FoodAboutDeliveryCTA.image";
  })[0];
  const foodAboutCTAImage = images.filter((image) => {
    return image.title === "cl.FoodAboutCTA.image";
  })[0];

  return (
    <Layout>
      <FoodAboutHero bgImage={foodAboutHeroBgImage}></FoodAboutHero>
      <FoodAboutDeliveryCTA
        image={foodAboutDeliveryCTAImage}
      ></FoodAboutDeliveryCTA>
      <FoodAboutCTA image={foodAboutCTAImage}></FoodAboutCTA>
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
          in: [
            "cl.FoodAboutHero.bgImage"
            "cl.FoodAboutDeliveryCTA.image"
            "cl.FoodAboutCTA.image"
          ]
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
