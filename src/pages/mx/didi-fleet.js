import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetVideoSection from "../../components/sections/FleetVideoSection";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetAgregaCTA from "../../components/sections/FleetAgregaCTA";
import FleetColumns from "../../components/sections/FleetColumns";

const DiDiFleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const FleetHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFleetHero.bgImage";
  })[0];

  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "mx.FleetSocioCTA.image";
  })[0];

  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "mx.FleetRegistraAutos.image";
  })[0];

  const FleetAgregaCTAImage = images.filter((image) => {
    return image.title === "mx.FleetAgrega.image";
  })[0];

  const FleetColumnsImage = images.filter((image) => {
    return image.title === "mx.FleetColumns.image";
  });

  

  return (
    <Layout>
      <FleetHero bgImage={FleetHeroBgImage}></FleetHero>
      <FleetVideoSection></FleetVideoSection>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetRegistraAutosCTA image={FleetRegistraAutosCTAImage}></FleetRegistraAutosCTA>
      <FleetAgregaCTA image={FleetAgregaCTAImage}></FleetAgregaCTA>
      <FleetColumns images={FleetColumnsImage.reverse()}></FleetColumns>
    </Layout>
  );
};

export default DiDiFleet;

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
      filter: {
        title: {
          in: [
            "mx.DiDiFleetHero.bgImage"
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
