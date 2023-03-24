import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
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
    return image.title === "pa.SafetyHero.bgImage";
  })[0];

  return (
    <Layout>
      <SafetyHero bgImage={safetyHeroBgImage}></SafetyHero>
      {beforeTrip && <SafetyFeaturesColumns title="Antes del Viaje" data={features}></SafetyFeaturesColumns>}
      {duringTrip && <SafetyFeaturesColumns title="Durante el Viaje" data={features}></SafetyFeaturesColumns>}
      {afterTrip && <SafetyFeaturesColumns title="Al Finalizar el Viaje" data={features}></SafetyFeaturesColumns>}
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["pa.SafetyHero.bgImage", "pa.SafetyColumns.image"] }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFeature(filter: {country: {code: {eq: "pa"}}, type: {ne: null}}) {
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
