import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SafetyDrvImgHero from "../../../components/sections/SafetyDrvImgHero";
import SafetyDrvColumns from "../../../components/sections/SafetyDrvColumns";
import SafetyFeaturesColumns from "../../../components/sections/SafetyFeaturesColumns";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const features = data.allContentfulFeature.nodes;

  let beforeTrip = false, duringTrip = false, afterTrip = false;

  if(features) {
    features.forEach(function(f, i){
      if(String(f.type) === "before") {
        beforeTrip = true;
      }

      if(String(f.type) === "during") {
        duringTrip = true;
      }

      if(String(f.type) === "after") {
        afterTrip = true;
      }
    });
  }
  const safetyHeroImage = images.filter((image) => {
    return image.title === "mx.SafetyDrv.image";
  })[0];

  const safetyCOVIDDrvColumns = images.filter((image) => {
    return image.title === "mx.SafetyCOVIDDrvColumns.image";
  });

  return (
    <Layout>
      <SafetyDrvImgHero image={safetyHeroImage}></SafetyDrvImgHero>
      {beforeTrip && <SafetyFeaturesColumns title="Antes del Viaje" data={features}></SafetyFeaturesColumns>}
      {duringTrip && <SafetyFeaturesColumns title="Durante el Viaje" data={features}></SafetyFeaturesColumns>}
      {afterTrip && <SafetyFeaturesColumns title="Al Finalizar el Viaje" data={features}></SafetyFeaturesColumns>}
      
      <SafetyDrvColumns
        images={safetyCOVIDDrvColumns.reverse()}
      ></SafetyDrvColumns>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.SafetyDrv.image)|(mx.SafetyBeforeDrvColumns.image)|(mx.SafetyCOVIDDrvColumns.image)|(mx.SafetyDuringDrvColumns.image)|(mx.SafetyFinishDrvColumns.image)/"
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
    allContentfulFeature(filter: {country: {code: {eq: "mx"}}, type: {ne: null}}) {
      nodes {
        id
        slug
        name
        description
        type
        componentImages {
          gatsbyImageData
          description
          title
        }
      }
    }
  }
`;
