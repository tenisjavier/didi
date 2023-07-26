import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodContactHero from "../../../components/sections/FoodContactHero";
import ContactInfo from "../../../components/sections/ContactInfo";
import FoodAppDownloads from "../../../components/sections/FoodAppDownloads";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodContactHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodContactHero.bgImage";
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
      <FoodContactHero bgImage={foodContactHeroBgImage}></FoodContactHero>
      <ContactInfo></ContactInfo>
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
      filter: { title: { regex: "/(mx.FoodContactHero.bgImage)|(mx.FoodDeliveryDownloads.image)/" } }
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