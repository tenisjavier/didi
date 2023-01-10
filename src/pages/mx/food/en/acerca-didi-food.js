import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodAboutHero from "../../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTAEn from "../../../../components/sections/FoodAboutDeliveryCTAEn";
import FoodAboutCTAEn from "../../../../components/sections/FoodAboutCTAEn";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodAboutHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodAboutHero.bgImage";
  })[0];
  const foodAboutDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodAboutDeliveryCTA.image";
  })[0];
  const foodAboutCTAImage = images.filter((image) => {
    return image.title === "mx.FoodAboutCTA.image";
  })[0];

  return (
    <Layout>
      <FoodAboutHero bgImage={foodAboutHeroBgImage}></FoodAboutHero>
      <FoodAboutDeliveryCTAEn
        image={foodAboutDeliveryCTAImage}
      ></FoodAboutDeliveryCTAEn>
      <FoodAboutCTAEn image={foodAboutCTAImage}></FoodAboutCTAEn>
    </Layout>
  );
};

export default FoodDelivery;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.FoodAboutHero.bgImage"
            "mx.FoodAboutDeliveryCTA.image"
            "mx.FoodAboutCTA.image"
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
