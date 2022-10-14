import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PartnersHero from "../../../components/sections/PartnersHero";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnersCTA from "../../../components/sections/PartnersCTA";
import AboutClubDiDi from "../../../components/sections/AboutClubDiDiVideo";
import HomeColumns from "../../../components/sections/HomeColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "co.DiDiMasHero.bgImage";
  })[0];
  const didiMasHeroImage = images.filter((image) => {
    return image.title === "co.DiDiMasHero.image";
  })[0];
  const partnerCTAImage = images.filter((image) => {
    return image.title === "co.PartnerCTA.image";
  })[0];
  return (
    <Layout>
      <PartnersHero
        bgImage={didiMasHeroBgImage}
        image={didiMasHeroImage}
      ></PartnersHero>
      <AboutClubDiDi></AboutClubDiDi>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

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
      filter: { title: { regex: "/(co.DiDiMasHero)|(co.PartnerCTA)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulPartner(filter: { country: { code: { eq: "co" } } }) {
      nodes {
        name
        desc
        logo {
          gatsbyImageData
          description
        }
      }
    }
  }
`;

export default DiDiMas;
