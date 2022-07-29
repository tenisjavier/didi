import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutWomenDrvHero from "../../components/sections/AboutWomenDrvHero";
import AboutWomenDrvCTA from "../../components/sections/AboutWomenDrvCTA";
import AboutWomenDrvBanner from "../../components/sections/AboutWomenDrvBanner";
import AboutWomenDrvVideo from "../../components/sections/AboutWomenDrvVideo";

const AboutWomenDrv = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const aboutWomenDrvHeroBgImage = images.filter((image) => {
    return image.title === "au.AboutWomenDrvHero.bgImage";
  })[0];
  const aboutWomenDrvCTAImage = images.filter((image) => {
    return image.title === "au.AboutWomenDrvCTA.image";
  })[0];

  return (
    <Layout>
      <AboutWomenDrvHero bgImage={aboutWomenDrvHeroBgImage}></AboutWomenDrvHero>
      <AboutWomenDrvCTA image={aboutWomenDrvCTAImage}></AboutWomenDrvCTA>
      <AboutWomenDrvBanner></AboutWomenDrvBanner>
      <AboutWomenDrvVideo></AboutWomenDrvVideo>
    </Layout>
  );
};

export default AboutWomenDrv;

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
      filter: {
        title: {
          in: ["au.AboutWomenDrvHero.bgImage", "au.AboutWomenDrvCTA.image"]
        }
      }
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
