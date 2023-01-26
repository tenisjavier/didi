import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import PartnersPrivateHero from "../../../../components/sections/PartnersPrivateHero";
import PartnersPrivateGrid from "../../../../components/sections/PartnersPrivateGrid";
import AboutClubDiDi from "../../../../components/sections/AboutClubDiDiVideo";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "co.DiDiMasHero.bgImage";
  })[0];
  const didiMasHeroImage = images.filter((image) => {
    return image.title === "co.DiDiMasHero.image";
  })[0];

  return (
    <Layout index={false}>
      <PartnersPrivateHero
        bgImage={didiMasHeroBgImage}
        image={didiMasHeroImage}
      ></PartnersPrivateHero>
      <AboutClubDiDi></AboutClubDiDi>
      <PartnersPrivateGrid data={partners}></PartnersPrivateGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(co.DiDiMasHero)|(co.PartnerCTA)/" } }
      sort: { title: ASC }
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
        slug
        logo {
          gatsbyImageData
          description
        }
      }
    }
  }
`;

export default DiDiMas;
