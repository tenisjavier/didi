import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyGridBeforeTrip from "../../components/sections/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../components/sections/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../components/sections/SafetyGridAfterTrip";
import SafetyGridDrv from "../../components/sections/SafetyGridDrv";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "cl.SafetyHero.bgImage";
  })[0];
  const safetyGridBeforeTripImages = images.filter((image) => {
    return image.title.indexOf("cl.SafetyGridBeforeTrip.image") !== -1;
  });
  const safetyGridDuringTripImages = images.filter((image) => {
    return image.title.indexOf("cl.SafetyGridDuringTrip.image") !== -1;
  });
  const safetyGridAfterTripImages = images.filter((image) => {
    return image.title.indexOf("cl.SafetyGridAfterTrip.image") !== -1;
  });
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("cl.SafetyGridDrv.image") !== -1;
  });
  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      <SafetyGridBeforeTrip
        images={safetyGridBeforeTripImages}
      ></SafetyGridBeforeTrip>
      <SafetyGridDuringTrip
        images={safetyGridDuringTripImages}
      ></SafetyGridDuringTrip>
      <SafetyGridAfterTrip
        images={safetyGridAfterTripImages}
      ></SafetyGridAfterTrip>
      <SafetyGridDrv images={safetyGridDrvImages}></SafetyGridDrv>
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
      filter: { title: { regex: "/(cl.SafetyGrid)|(cl.SafetyHero)/" } }
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
