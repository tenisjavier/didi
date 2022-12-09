import React from "react";
import { graphql } from "gatsby";
import { faShieldHeart, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/Layout";
import PartnersHero from "../../../components/sections/PartnersHero";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnersCTA from "../../../components/sections/PartnersCTA";
import AboutDidiPartnersVideo from "../../../components/sections/AboutDidiPartnersVideo";
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

  const partnerHeroImage = images.filter((image) => {
    return image.title === "au.PartnerCTA.image";
  })[0];

  return (
    <Layout>
      <PartnersHero
        bgImage={partnersHeroBgImage}
        image={partnerHeroImage}
      ></PartnersHero>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <AboutDidiPartnersVideo></AboutDidiPartnersVideo>
      <DrvColumns icons={iconsDrvColumns}></DrvColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(nz.PartnersHero)|(nz.PartnerCTA.image)|(au.PartnerCTA.image)/"
        }
      }
      sort: { title: ASC }
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
        slug
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
