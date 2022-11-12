import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DeliveryPersonalHero from "../../../components/sections/DeliveryPersonalHero";
import DeliveryColumns from "../../../components/sections/DeliveryColumns";
import DeliveryPersonalWhyDiDi from "../../../components/sections/DeliveryPersonalWhyDiDi";
import DeliveryPersonalFeatures from "../../../components/sections/DeliveryPersonalFeatures";
import HomeColumns from "../../../components/sections/HomeColumns";

const DeliveryPersonal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const deliveryHeroBgImage = images.filter((image) => {
    return image.title === "au.DeliveryPersonalHero.bgImage";
  })[0];
  const deliveryWhyDiDiImage = images.filter((image) => {
    return image.title === "au.DeliveryPersonalWhyDiDi.image";
  })[0];
  const deliveryFeaturesImage = images.filter((image) => {
    return image.title === "au.DeliveryPersonalFeatures.image";
  })[0];
  const deliveryColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.DeliveryColumns.image") !== -1;
  });
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  return (
    <Layout>
      <DeliveryPersonalHero
        bgImage={deliveryHeroBgImage}
      ></DeliveryPersonalHero>
      <DeliveryColumns images={deliveryColumnsImages}></DeliveryColumns>
      <DeliveryPersonalWhyDiDi
        image={deliveryWhyDiDiImage}
      ></DeliveryPersonalWhyDiDi>
      <DeliveryPersonalFeatures
        image={deliveryFeaturesImage}
      ></DeliveryPersonalFeatures>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default DeliveryPersonal;

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
    filter: {title: {regex: "/(au.DeliveryPersonalHero)|(au.DeliveryPersonalWhyDiDi.image)|(au.DeliveryPersonalFeatures.image)|(au.DeliveryColumns.image)|(au.HomeColumns.image)/"}}
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
