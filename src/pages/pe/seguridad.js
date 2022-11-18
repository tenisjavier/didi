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
    return image.title === "pe.SafetyHero.bgImage";
  })[0];
  const safetyGridBeforeTripImages = images.filter((image) => {
    return image.title.indexOf("pe.SafetyGridBeforeTrip.image") !== -1;
  });
  const safetyGridDuringTripImages = images.filter((image) => {
    return image.title.indexOf("pe.SafetyGridDuringTrip.image") !== -1;
  });
  const safetyGridAfterTripImages = images.filter((image) => {
    return image.title.indexOf("pe.SafetyGridAfterTrip.image") !== -1;
  });
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("pe.SafetyGridDrv.image") !== -1;
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
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(pe.SafetyGrid)|(pe.SafetyHero)/" } }
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
