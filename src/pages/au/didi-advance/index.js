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
  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "au.PartnersHero.bgImage";
  })[0];

  const partnerCTAImage = images.filter((image) => {
    return image.title === "au.PartnerCTA.image";
  })[0];
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });

  return (
    <Layout>
      <PartnersHero
        bgImage={partnersHeroBgImage}
        image={partnerCTAImage}
      ></PartnersHero>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.PartnersHero)|(au.PartnerCTA.image)|(au.HomeColumns.image)/"
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
    allContentfulPartner(filter: { country: { code: { eq: "au" } } }) {
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
