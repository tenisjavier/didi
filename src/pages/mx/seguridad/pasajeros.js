import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyPaxImgHero from "../../../components/sections/SafetyPaxImgHero";
import SafetyGridPaxBeforeTrip from "../../../components/sections/SafetyGridPaxBeforeTrip";
import SafetyGridPaxDuringTrip from "../../../components/sections/SafetyGridPaxDuringTrip";
import SafetyGridPaxAfterTrip from "../../../components/sections/SafetyGridPaxAfterTrip";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const features = data.allContentfulFeature.nodes;

  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyPax.image";
  })[0];
  const safetyBeforePaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyBeforePaxColumns.image";
  });
  const safetyDuringPaxColumns = images.filter((image) => {
    if (image.filename === "mx.SafetyDuringPaxColumns.image-4.png") {
      return;
    }
    return image.title === "mx.SafetyDuringPaxColumns.image";
  });
  const safetyFinishedPaxColumns = images.filter((image) => {
    return image.title === "mx.SafetyFinishPaxColumns.image";
  });

  console.log(features);
  console.log(safetyDuringPaxColumns);

  return (
    <Layout>
      <SafetyPaxImgHero image={safetyHeroImage}></SafetyPaxImgHero>
      <SafetyGridPaxBeforeTrip
        images={safetyBeforePaxColumns.reverse()}
        features={features}
      ></SafetyGridPaxBeforeTrip>
      <SafetyGridPaxDuringTrip
        images={safetyDuringPaxColumns.reverse()}
        features={features}
      ></SafetyGridPaxDuringTrip>
      <SafetyGridPaxAfterTrip
        images={safetyFinishedPaxColumns.reverse()}
        features={features}
      ></SafetyGridPaxAfterTrip>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.SafetyPax.image)|(mx.SafetyBeforePaxColumns.image)|(mx.SafetyDuringPaxColumns.image)|(mx.SafetyFinishPaxColumns.image)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
        filename
      }
    }
    allContentfulFeature(
      filter: { country: { code: { eq: "mx" } }, category: { eq: "pax" } }
    ) {
      nodes {
        name
        slug
      }
    }
  }
`;
