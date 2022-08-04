import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetColumns from "../../components/sections/FleetColumns";
import AboutDidiFleetVideo from "../../components/sections/AboutDidiFleetVideo";
import FleetStepsColumns from "../../components/sections/FleetStepsColumns";
import DownloadFleetCTA from "../../components/sections/DownloadFleetCTA";

const Fleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const fleetHeroBgImage = images.filter((image) => {
    return image.title === "cr.FleetHero.bgImage";
  })[0];
  const FleetColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FleetColumns.image") !== -1;
  });
  const FleetStepsColumnsImages = images.filter((image) => {
    return image.title.indexOf("cr.FleetStepsColumns.image") !== -1;
  });
  const fleetDownloadImage = images.filter((image) => {
    return image.title === "cr.FleetDownload.image";
  })[0];

  

  return (
    <Layout>
      <FleetHero bgImage={fleetHeroBgImage}></FleetHero>
      <DownloadFleetCTA image={fleetDownloadImage}></DownloadFleetCTA>
      <FleetStepsColumns images={FleetStepsColumnsImages}></FleetStepsColumns>
      <AboutDidiFleetVideo></AboutDidiFleetVideo>
      <FleetColumns images={FleetColumnsImages.reverse()}></FleetColumns>
    </Layout>
  );
};

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
      filter: { title: { in: ["cr.FleetHero.bgImage", "cr.FleetWhyDiDi.image", "cr.FleetColumns.image", "cr.FleetStepsColumns.image", "cr.FleetDownload.image"] } }
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
        country: { elemMatch: { code: { eq: "cr" } } }
        name: { eq: "DiDi Fleet Costa Rica" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Fleet;
