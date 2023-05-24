import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import AboutDidiFleetVideo from "../../components/sections/AboutDidiFleetVideo";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetSafety from "../../components/sections/FleetSafety";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetColumns from "../../components/sections/FleetColumns";

const DiDiFleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const FleetHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFleetHero.bgImage";
  })[0];
  const FleetHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.DiDiFleetHeroMobile.bgImage";
  })[0];
  const FleetSafetyImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.image";
  })[0];

  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "mx.FleetSocioCTA.image";
  })[0];

  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "mx.FleetRegistraAutos.image";
  })[0];

  return (
    <Layout>
      <FleetHero
        bgImage={FleetHeroBgImage}
        mobileBgImage={FleetHeroBgImageMobile}
      ></FleetHero>
      <AboutDidiFleetVideo></AboutDidiFleetVideo>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetSafety image={FleetSafetyImage}></FleetSafety>
      <FleetRegistraAutosCTA
        image={FleetRegistraAutosCTAImage}
      ></FleetRegistraAutosCTA>
      <FleetColumns></FleetColumns>
    </Layout>
  );
};

export default DiDiFleet;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.DiDiFleetHero.bgImage"
            "mx.SafetyCTA.image"
            "mx.DiDiFleetHeroMobile.bgImage"
            "mx.FleetSocioCTA.image"
            "mx.FleetRegistraAutos.image"
            "mx.FleetAgrega.image"
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
  }
`;
