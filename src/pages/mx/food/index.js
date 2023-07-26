import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodHero from "../../../components/sections/FoodHero";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";
import FoodAppDownloads from "../../../components/sections/FoodAppDownloads";

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

  return (
    <Layout>
      <FoodHero
        bgImage={foodHeroBgImage}
        mobileBgImage={foodHeroMobileBgImage}
      ></FoodHero>
      <FoodColumns images={foodColumnsImages}></FoodColumns>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
    </Layout>
  );
};

export default Food;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodHeroMobile.bgImage)|(mx.FoodColumns.image)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)/"
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
