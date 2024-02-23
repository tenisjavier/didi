import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyDrvImgHero from "../../../components/sections/SafetyDrvImgHero";
import SafetyGridBeforeTrip from "../../../components/sections/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../../components/sections/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../../components/sections/SafetyGridAfterTrip";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const features = data.allContentfulFeature.nodes;

  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyDrv.image";
  })[0];

  return (
    <Layout>
      <SafetyDrvImgHero image={safetyHeroImage}></SafetyDrvImgHero>
      <SafetyGridBeforeTrip features={features}></SafetyGridBeforeTrip>
      <SafetyGridDuringTrip features={features}></SafetyGridDuringTrip>
      <SafetyGridAfterTrip features={features}></SafetyGridAfterTrip>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.SafetyDrv.image)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFeature(
      filter: { country: { code: { eq: "do" } }, category: { eq: "driver" } }
    ) {
      nodes {
        name
        slug
        image {
          id
          title
          description
          gatsbyImageData
        }
      }
    }
  }
`;
