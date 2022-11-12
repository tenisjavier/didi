import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DeliveryHero from "../../../components/sections/DeliveryHero";
import DeliveryColumns from "../../../components/sections/DeliveryColumns";
import DeliveryWhyDiDi from "../../../components/sections/DeliveryWhyDiDi";
import DeliveryFeatures from "../../../components/sections/DeliveryFeatures";
import HomeColumns from "../../../components/sections/HomeColumns";

const Delivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const deliveryHeroBgImage = images.filter((image) => {
    return image.title === "au.DeliveryHero.bgImage";
  })[0];
  const deliveryWhyDiDiImage = images.filter((image) => {
    return image.title === "au.DeliveryWhyDiDi.image";
  })[0];
  const deliveryFeaturesImage = images.filter((image) => {
    return image.title === "au.DeliveryFeatures.image";
  })[0];
  const deliveryColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.DeliveryColumns.image") !== -1;
  });
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  return (
    <Layout>
      <DeliveryHero bgImage={deliveryHeroBgImage}></DeliveryHero>
      <DeliveryColumns images={deliveryColumnsImages}></DeliveryColumns>
      <DeliveryWhyDiDi image={deliveryWhyDiDiImage}></DeliveryWhyDiDi>
      <DeliveryFeatures image={deliveryFeaturesImage}></DeliveryFeatures>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default Delivery;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(au.DeliveryHero)|(au.DeliveryWhyDiDi.image)|(au.DeliveryFeatures.image)|(au.DeliveryColumns.image)|(au.HomeColumns.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulPartner(filter: {country: {code: {eq: "au"}}}) {
    nodes {
      name
      desc
      logo {
        gatsbyImageData
        description
      }
    }
  }
}`;
