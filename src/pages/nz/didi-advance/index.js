import React from "react";
import { graphql } from "gatsby";
import { faShieldHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/Layout";
import PartnersHero from "../../../components/sections/PartnersHero";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnersCTA from "../../../components/sections/PartnersCTA";
import DrvColumns from "../../../components/sections/DrvColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const iconsDrvColumns = [faShieldHeart, faPhoneAlt];
  const partners = data.allContentfulPartner.nodes;
  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "nz.PartnersHero.bgImage";
  })[0];

  const partnerCTAImage = images.filter((image) => {
    return image.title === "nz.PartnerCTA.image";
  })[0];

  return (
    <Layout>
      <PartnersHero
        bgImage={partnersHeroBgImage}
        image={partnerCTAImage}
      ></PartnersHero>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <DrvColumns icons={iconsDrvColumns}></DrvColumns>
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
      filter: { title: { regex: "/(nz.PartnersHero)|(nz.PartnerCTA.image)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulPartner(filter: { country: { code: { eq: "nz" } } }) {
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
