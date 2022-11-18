import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyPaxImgHero from "../../../components/sections/SafetyPaxImgHero";
import SafetyPaxColumns from "../../../components/sections/SafetyPaxColumns";
import SafetyGridPaxBeforeTrip from "../../../components/sections/SafetyGridPaxBeforeTrip";
import SafetyGridPaxDuringTrip from "../../../components/sections/SafetyGridPaxDuringTrip";
import SafetyGridPaxAfterTrip from "../../../components/sections/SafetyGridPaxAfterTrip";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyPax.image";
  })[0];
  const safetyBeforePaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyBeforePaxColumns.image";
  });
  const safetyDuringPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyDuringPaxColumns.image";
  });
  const safetyFinishedPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyFinishPaxColumns.image";
  });
  const safetyCOVIDPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyCOVIDPaxColumns.image";
  });

  return (
    <Layout>
      <SafetyPaxImgHero image={safetyHeroImage}></SafetyPaxImgHero>
      <SafetyGridPaxBeforeTrip
        images={safetyBeforePaxColumns.reverse()}
      ></SafetyGridPaxBeforeTrip>
      <SafetyGridPaxDuringTrip
        images={safetyDuringPaxColumns.reverse()}
      ></SafetyGridPaxDuringTrip>
      <SafetyGridPaxAfterTrip
        images={safetyFinishedPaxColumns.reverse()}
      ></SafetyGridPaxAfterTrip>
      <SafetyPaxColumns
        images={safetyCOVIDPaxColumns.reverse()}
      ></SafetyPaxColumns>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.SafetyPax.image)|(mx.SafetyBeforePaxColumns.image)|(mx.SafetyCOVIDPaxColumns.image)|(mx.SafetyDuringPaxColumns.image)|(mx.SafetyFinishPaxColumns.image)/"
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
