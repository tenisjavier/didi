import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faClock,
  faUserShield,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import PaxHeroRTL from "../../components/sections/PaxHeroRTL";
import PaxBenefits from "../../components/sections/PaxBenefits";
import InfoColumnsRTL from "../../components/sections/InfoColumnsRTL";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faCircleDollarToSlot, faClock, faUserShield, faThumbsUp];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "eg.PaxHero.bgImage";
  })[0];
  const paxBenefitsImage = images.filter((image) => {
    return image.title === "eg.PaxBenefits.image";
  })[0];

  return (
    <Layout>
      <PaxHeroRTL bgImage={paxHeroBgImage}></PaxHeroRTL>
      <PaxBenefits image={paxBenefitsImage} icons={icons}></PaxBenefits>
      <InfoColumnsRTL></InfoColumnsRTL>
    </Layout>
  );
};

export default Pasajero;

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
    filter: {title: {regex: "/(eg.PaxHero.bgImage)|(eg.PaxBenefits.image)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulProduct(
    filter: {country: {elemMatch: {code: {eq: "eg"}}}, category: {eq: "driver"}}
  ) {
    nodes {
      name
      description
      phone
      requirement {
        raw
      }
      image {
        gatsbyImageData
      }
      country {
        code
      }
    }
  }
}`;
