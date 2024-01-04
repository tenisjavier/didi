import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetSafety from "../../components/sections/FleetSafety";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetAgregaCTA from "../../components/sections/FleetAgregaCTA";
import FleetColumns from "../../components/sections/FleetColumns";

const Fleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const fleetHeroBgImage = images.filter((image) => {
    return image.title === "ar.FleetHero.bgImage";
  })[0];
  const fleetHeroBgImageMobile = images.filter((image) => {
    return image.title === "ar.DiDiFleetHeroMobile.bgImage";
  })[0];
  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "ar.FleetSocioCTA.image";
  })[0];
  const FleetSafetyImage = images.filter((image) => {
    return image.title === "ar.SafetyCTA.image";
  })[0];
  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "ar.FleetRegistraAutos.image";
  })[0];

  const FleetAgregaCTAImage = images.filter((image) => {
    return image.title === "ar.FleetAgrega.image";
  })[0];

  return (
    <Layout>
      <FleetHero
        bgImage={fleetHeroBgImage}
        mobileBgImage={fleetHeroBgImageMobile}
      ></FleetHero>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetSafety image={FleetSafetyImage}></FleetSafety>
      <FleetRegistraAutosCTA
        image={FleetRegistraAutosCTAImage}
      ></FleetRegistraAutosCTA>
      <FleetAgregaCTA image={FleetAgregaCTAImage}></FleetAgregaCTA>
      <FleetColumns></FleetColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(ar.FleetHero.bgImage)|(ar.DiDiFleetHeroMobile.bgImage)|(ar.SafetyCTA.image)|(ar.FleetSocioCTA.image)|(ar.FleetRegistraAutos.image)|(ar.FleetAgrega.image)|(ar.FleetStepsColumns.image)/"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "ar" } } }
        name: { eq: "DiDi Fleet Argentina" }
      }
    ) {
      nodes {
        contentful_id
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
