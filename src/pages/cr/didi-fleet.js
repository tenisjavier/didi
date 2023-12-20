import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetSafety from "../../components/sections/FleetSafety";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetColumns from "../../components/sections/FleetColumns";
import AboutDidiFleetVideo from "../../components/sections/AboutDidiFleetVideo";

const Fleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const fleetHeroBgImage = images.filter((image) => {
    return image.title === "cr.FleetHero.bgImage";
  })[0];
  const fleetHeroBgImageMobile = images.filter((image) => {
    return image.title === "cr.DiDiFleetHeroMobile.bgImage";
  })[0];
  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "mx.FleetSocioCTA.image";
  })[0];
  const FleetSafetyImage = images.filter((image) => {
    return image.title === "cr.SafetyCTA.image";
  })[0];
  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "mx.FleetRegistraAutos.image";
  })[0];

  return (
    <Layout>
      <FleetHero
        bgImage={fleetHeroBgImage}
        mobileBgImage={fleetHeroBgImageMobile}
      ></FleetHero>
      <AboutDidiFleetVideo></AboutDidiFleetVideo>
      <FleetSafety image={FleetSafetyImage}></FleetSafety>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetRegistraAutosCTA
        image={FleetRegistraAutosCTAImage}
      ></FleetRegistraAutosCTA>
      <FleetColumns></FleetColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "cr.FleetHero.bgImage"
            "cr.DiDiFleetHeroMobile.bgImage"
            "mx.FleetSocioCTA.image"
            "cr.SafetyCTA.image"
            "mx.FleetRegistraAutos.image"
            "cr.FleetDownload.image"
          ]
        }
      }
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
