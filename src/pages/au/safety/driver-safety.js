import React from "react";
import { graphql } from "gatsby";
import {
  faShield,
  faMessage,
  faUsers,
  faEarListen,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/Layout";
import SafetyDrvHero from "../../../components/sections/SafetyDrvHero";
import SafetyGridDrv from "../../../components/sections/SafetyGridDrv";
import SafetyPaxColumns from "../../../components/sections/SafetyPaxColumns";
import SafetyBanner from "../../../components/sections/SafetyBanner";
import FaqList from "../../../components/sections/FaqList";

const DrvSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const iconsDrvColumns = [faShield, faMessage, faUsers, faEarListen];
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "au.SafetyHero.bgImage";
  })[0];
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridDrv.image") !== -1;
  });
  const faqs = data.allContentfulFaq.nodes;
  return (
    <Layout>
      <SafetyDrvHero bgImage={safetyHeroBgImage}></SafetyDrvHero>
      <SafetyGridDrv images={safetyGridDrvImages}></SafetyGridDrv>
      <SafetyPaxColumns icons={iconsDrvColumns}></SafetyPaxColumns>
      <SafetyBanner></SafetyBanner>
      <FaqList title={"Safety Training Modules"} faqs={faqs}></FaqList>
    </Layout>
  );
};

export default DrvSafety;

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
    filter: {title: {regex: "/(au.SafetyHero)|(au.SafetyGridDrv)/"}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulFaq(
    filter: {title: {regex: "/(How to stay safe on the road?)|(Anti-Discrimination and Sexual Harassment|(Ensuring a better journey)|(Disability Awareness)|(COVID-19 Guidelines))/"}, country: {code: {eq: "au"}}}
  ) {
    nodes {
      id
      title
      slug
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 800)
            __typename
          }
        }
      }
    }
  }
}`;
