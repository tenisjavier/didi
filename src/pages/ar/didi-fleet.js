import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FleetHero from "../../components/sections/FleetHero";
import FleetColumns from "../../components/sections/FleetColumns";
import FleetSocioCTA from "../../components/sections/FleetSocioCTA";
import FleetRegistraAutosCTA from "../../components/sections/FleetRegistraAutosCTA";
import FleetAgregaCTA from "../../components/sections/FleetAgregaCTA";
// import AboutDidiFleetVideo from "../../components/sections/AboutDidiFleetVideo";
import DownloadFleetCTA from "../../components/sections/DownloadFleetCTA";

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

  const FleetRegistraAutosCTAImage = images.filter((image) => {
    return image.title === "ar.FleetRegistraAutos.image";
  })[0];

  const FleetAgregaCTAImage = images.filter((image) => {
    return image.title === "ar.FleetAgrega.image";
  })[0];
  const FleetColumnsImages = images.filter((image) => {
    return image.title.indexOf("ar.FleetColumns.image") !== -1;
  });
  const fleetDownloadImage = images.filter((image) => {
    return image.title === "ar.FleetDownload.image";
  })[0];
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
      <FleetAgregaCTA image={FleetAgregaCTAImage}></FleetAgregaCTA>
      <DownloadFleetCTA image={fleetDownloadImage}></DownloadFleetCTA>
      {/* <FleetStepsColumns images={FleetStepsColumnsImages}></FleetStepsColumns> */}
      {/* <AboutDidiFleetVideo></AboutDidiFleetVideo> */}
      <FleetColumns images={FleetColumnsImages.reverse()}></FleetColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(ar.FleetHero.bgImage)|(ar.DiDiFleetHeroMobile.bgImage)|(ar.FleetSocioCTA.image)|(ar.FleetRegistraAutos.image)|(ar.FleetAgrega.image)|(ar.FleetColumns.image)|(ar.FleetStepsColumns.image)|(ar.FleetDownload.image)/"
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
