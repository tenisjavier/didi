import React from "react";
import { useLocation } from "@reach/router";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodHero from "../../../components/sections/FoodHero";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import DiDiFoodCarousel from "../../../components/sections/Food/DiDiFoodCarousel";

const Food = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.FoodHeroMobile.bgImage";
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
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

  const DiDiFoodCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiFoodCarousel.image";
  });

  return (
    <Layout>
      <FoodHero
        bgImage={foodHeroBgImage}
        mobileBgImage={foodHeroMobileBgImage}
      ></FoodHero>
      {useLocation().search === "?test=day" && (
        <DiDiFoodCarousel
          images={DiDiFoodCarouselImages.reverse()}
        ></DiDiFoodCarousel>
      )}
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodHeroMobile.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.DiDiFoodCarousel.image)/"
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
