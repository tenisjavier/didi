import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyGridDrv from "../../components/sections/SafetyGridDrv";
import SafetyFeaturesColumns from "../../components/sections/SafetyFeaturesColumns";

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

  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "pe.SafetyHero.bgImage";
  })[0];

  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("pe.SafetyGridDrv.image") !== -1;
  });
  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      {beforeTrip && <SafetyFeaturesColumns title="Antes del Viaje" data={features}></SafetyFeaturesColumns>}
      {duringTrip && <SafetyFeaturesColumns title="Durante el Viaje" data={features}></SafetyFeaturesColumns>}
      {afterTrip && <SafetyFeaturesColumns title="Al Finalizar el Viaje" data={features}></SafetyFeaturesColumns>}
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
    allContentfulFeature(filter: {country: {code: {eq: "pe"}}, type: {ne: null}}) {
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
