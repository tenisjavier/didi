import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodAboutHero from "../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTA from "../../../components/sections/FoodAboutDeliveryCTA";
import FoodAboutCTA from "../../../components/sections/FoodAboutCTA";
import FoodAppDownloads from "../../../components/sections/FoodAppDownloads";

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
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

  // useEffect(() => {
  //   const btnPrimary = document.getElementsByClassName("btn-primary")[0];
  //   if (btnPrimary && btnPrimary.getElementsByTagName("a")[0]) {
  //     setQRUrl(btnPrimary.getElementsByTagName("a")[0].href);
  //   }
  // }, []);

  return (
    <Layout>
      <FoodAboutHero bgImage={foodAboutHeroBgImage}></FoodAboutHero>
      <FoodAboutDeliveryCTA
        image={foodAboutDeliveryCTAImage}
      ></FoodAboutDeliveryCTA>
      <FoodAboutCTA image={foodAboutCTAImage}></FoodAboutCTA>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
      </div>
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
            "mx.FoodDeliveryDownloads.image"
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