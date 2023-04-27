import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PartnersHero from "../../../components/sections/PartnersHero";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnersCTA from "../../../components/sections/PartnersCTA";
import HomeColumns from "../../../components/sections/HomeColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "cl.DiDiMasHero.bgImage";
  })[0];
  const partnerCTAImage = images.filter((image) => {
    return image.title === "cl.PartnerCTA.image";
  })[0];
  return (
    <Layout>
      <PartnersHero bgImage={didiMasHeroBgImage}></PartnersHero>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(cl.DiDiMasHero)|(cl.PartnerCTA)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulPartner(filter: { country: { code: { eq: "cl" } } }) {
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
