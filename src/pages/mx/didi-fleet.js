import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import AboutDidiFleetVideo from "../../components/sections/AboutDidiFleetVideo";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
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

  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "mx.FleetSocioCTA.image";
  })[0];

  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "mx.FleetRegistraAutos.image";
  })[0];

  const FleetColumnsImage = images.filter((image) => {
    return image.title === "mx.FleetColumns.image";
  });

  return (
    <Layout>
      <FleetHero
        bgImage={FleetHeroBgImage}
        mobileBgImage={FleetHeroBgImageMobile}
      ></FleetHero>
      <AboutDidiFleetVideo></AboutDidiFleetVideo>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetRegistraAutosCTA
        image={FleetRegistraAutosCTAImage}
      ></FleetRegistraAutosCTA>
      <FleetColumns images={FleetColumnsImage.reverse()}></FleetColumns>
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
            "mx.DiDiFleetHeroMobile.bgImage"
            "mx.FleetSocioCTA.image"
            "mx.FleetRegistraAutos.image"
            "mx.FleetAgrega.image"
            "mx.FleetColumns.image"
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
