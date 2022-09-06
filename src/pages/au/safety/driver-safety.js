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

const DrvSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const iconsDrvColumns = [faShield, faMessage, faUsers, faEarListen];
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "au.SafetyHero.bgImage";
  })[0];
  const safetyGridDrvImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridDrv.image") !== -1;
  });

  return (
    <Layout>
      <SafetyDrvHero bgImage={safetyHeroBgImage}></SafetyDrvHero>
      <SafetyGridDrv images={safetyGridDrvImages}></SafetyGridDrv>
      <SafetyPaxColumns icons={iconsDrvColumns}></SafetyPaxColumns>
      <SafetyBanner></SafetyBanner>
    </Layout>
  );
};

export default DrvSafety;

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
      filter: { title: { regex: "/(au.SafetyHero)|(au.SafetyGridDrv)/" } }
      sort: { fields: title }
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
