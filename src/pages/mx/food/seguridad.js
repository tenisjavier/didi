import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodSafetyHero from "../../../components/sections/FoodSafetyHero";
import SafetyRoadCTA from "../../../components/sections/SafetyRoadCTA";
import SafetyToolsCTA from "../../../components/sections/SafetyToolsCTA";
import FoodSafetyColumns from "../../../components/sections/FoodSafetyColumns";
import SupportFundCTA from "../../../components/sections/SupportFundCTA";
import InsuranceCoverageCTA from "../../../components/sections/InsuranceCoverageCTA";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const FoodSafetyHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodSafetyHero.bgImage";
  })[0];
  const foodSafetyToolsColumns = images.filter((image) => {
    return image.title === "mx.FoodSafetyToolsColumns.image";
  });
  const SupportFundCTAImage = images.filter((image) => {
    return image.title === "mx.SupportFundCTA.image";
  })[0];
  const insuranceCoverageCTA = images.filter((image) => {
    return image.title === "mx.InsuranceCoverageCTA.image";
  })[0];

  return (
    <Layout>
      <FoodSafetyHero bgImage={FoodSafetyHeroBgImage}></FoodSafetyHero>
      <SafetyRoadCTA></SafetyRoadCTA>
      <SafetyToolsCTA></SafetyToolsCTA>
      <FoodSafetyColumns
        images={foodSafetyToolsColumns.reverse()}
      ></FoodSafetyColumns>
      <SupportFundCTA image={SupportFundCTAImage}></SupportFundCTA>
      <InsuranceCoverageCTA image={insuranceCoverageCTA}></InsuranceCoverageCTA>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default Seguridad;

export const query = graphql`query ($language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(mx.FoodSafetyHero.bgImage)|(mx.FoodSafetyToolsColumns.image)|(mx.SupportFundCTA.image)|(mx.InsuranceCoverageCTA.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
