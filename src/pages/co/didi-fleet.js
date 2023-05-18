import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetColumns from "../../components/sections/FleetColumns";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetStepsColumns from "../../components/sections/FleetStepsColumns";

const Fleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const fleetHeroBgImage = images.filter((image) => {
    return image.title === "co.FleetHero.bgImage";
  })[0];
  const fleetHeroBgImageMobile = images.filter((image) => {
    return image.title === "co.DiDiFleetHeroMobile.bgImage";
  })[0];
  const FleetSocioCTAImage = images.filter((image) => {
    return image.title === "ar.FleetSocioCTA.image";
  })[0];
  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "mx.FleetRegistraAutos.image";
  })[0];
  const FleetColumnsImages = images.filter((image) => {
    return image.title.indexOf("co.FleetColumns.image") !== -1;
  });
  const FleetStepsColumnsImages = images.filter((image) => {
    return image.title.indexOf("co.FleetStepsColumns.image") !== -1;
  });

  return (
    <Layout>
      <FleetHero
        bgImage={fleetHeroBgImage}
        mobileBgImage={fleetHeroBgImageMobile}
      ></FleetHero>
      <FleetSocioCTA image={FleetSocioCTAImage}></FleetSocioCTA>
      <FleetRegistraAutosCTA
        image={FleetRegistraAutosCTAImage}
      ></FleetRegistraAutosCTA>
      <FleetStepsColumns images={FleetStepsColumnsImages}></FleetStepsColumns>
      <FleetColumns images={FleetColumnsImages.reverse()}></FleetColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(co.FleetHero.bgImage)|(co.DiDiFleetHeroMobile.bgImage)|(ar.FleetSocioCTA.image)|(co.FleetColumns.image)|(co.FleetStepsColumns.image)|(mx.FleetRegistraAutos.image)/"
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
        country: { elemMatch: { code: { eq: "co" } } }
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
