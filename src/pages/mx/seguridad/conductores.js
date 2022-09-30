import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyDrvImgHero from "../../../components/sections/SafetyDrvImgHero";
import SafetyDrvColumns from "../../../components/sections/SafetyDrvColumns";
import SafetyGridBeforeTrip from "../../../components/sections/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../../components/sections/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../../components/sections/SafetyGridAfterTrip";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyDrv.image";
  })[0];
  const safetyBeforeDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyBeforeDrvColumns.image";
  });
  const safetyDuringDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyDuringDrvColumns.image";
  });
  const safetyFinishedDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyFinishDrvColumns.image";
  });
  const safetyCOVIDDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyCOVIDDrvColumns.image";
  });
  return (
    <Layout>
      <SafetyDrvImgHero image={safetyHeroImage}></SafetyDrvImgHero>
      <SafetyGridBeforeTrip
        images={safetyBeforeDrvColumns.reverse()}
      ></SafetyGridBeforeTrip>
      <SafetyGridDuringTrip
        images={safetyDuringDrvColumns.reverse()}
      ></SafetyGridDuringTrip>
      <SafetyGridAfterTrip
        images={safetyFinishedDrvColumns.reverse()}
      ></SafetyGridAfterTrip>
      <SafetyDrvColumns
        images={safetyCOVIDDrvColumns.reverse()}
      ></SafetyDrvColumns>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
          regex: "/(mx.SafetyDrv.image)|(mx.SafetyBeforeDrvColumns.image)|(mx.SafetyCOVIDDrvColumns.image)|(mx.SafetyDuringDrvColumns.image)|(mx.SafetyFinishDrvColumns.image)/"
        }
      }
      sort: { fields: title }
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
