import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodHero from "../../../../components/sections/FoodHero";
import FoodNeighborhoodList from "../../../../components/sections/FoodNeighborhoodList";
import FoodBusinessCTA from "../../../../components/sections/FoodBusinessCTA";
import FoodDeliveryCTA from "../../../../components/sections/FoodDeliveryCTA";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessDownloads.image") !== -1;
  });
  const cities = data.allContentfulNeighbourhood.nodes;

  return (
    <Layout>
      <FoodHero bgImage={drvHeroBgImage}></FoodHero>
      <FoodNeighborhoodList data={cities}></FoodNeighborhoodList>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
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
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodBusinessDownloads.image)/"
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
    allContentfulNeighbourhood {
    nodes {
      name
    }
  }
  }
`;

export default Ciudades;
