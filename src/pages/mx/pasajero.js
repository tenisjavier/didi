import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import PaxColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "mx.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.PaxHeroMobile.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.PaxWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
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
      <PaxHero
        bgImage={paxHeroBgImage}
        mobileBgImage={paxHeroMobileBgImage}
      ></PaxHero>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
      <PaxColumns></PaxColumns>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDi image={paxWhyDiDiImage}></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
      <HomeColumns></HomeColumns>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
    </Layout>
  );
};

export default Pasajero;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.PaxHero.bgImage)|(mx.PaxHeroMobile.bgImage)|(mx.PaxWhyDiDi.image)|(mx.FoodDeliveryDownloads.image)/"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        descriptionForPax
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
  }
`;
