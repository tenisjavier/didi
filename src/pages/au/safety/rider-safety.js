import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import {
  faShield,
  faMessage,
  faUsers,
  faEarListen,
} from "@fortawesome/free-solid-svg-icons";
import SafetyPaxHero from "../../../components/sections/SafetyPaxHero";
import SafetyGridDuringTrip from "../../../components/sections/SafetyGridDuringTrip";
import SafetyPaxColumns from "../../../components/sections/SafetyPaxColumns";
import SafetyBanner from "../../../components/sections/SafetyBanner";

const RiderSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const iconsDrvColumns = [faShield, faMessage, faUsers, faEarListen];
  const safetyHeroBgImage = images.filter((image) => {
    return image.title === "au.SafetyHero.bgImage";
  })[0];
  const safetyGridPaxImages = images.filter((image) => {
    return image.title.indexOf("au.SafetyGridPax.image") !== -1;
  });
  return (
    <Layout>
      <SafetyPaxHero bgImage={safetyHeroBgImage}></SafetyPaxHero>
      <SafetyGridDuringTrip images={safetyGridPaxImages}></SafetyGridDuringTrip>
      <SafetyPaxColumns icons={iconsDrvColumns}></SafetyPaxColumns>
      <SafetyBanner></SafetyBanner>
    </Layout>
  );
};

export default RiderSafety;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(au.SafetyGridPax)|(au.SafetyHero)/" } }
      sort: { title: ASC }
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
