import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PartnersHero from "../../../components/sections/PartnersHero";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnerColumns from "../../../components/sections/PartnerColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "mx.ClubDiDiHero.bgImage";
  })[0];
  const partnerColumns = images.filter((image) => {
    return image.title === "mx.RewardsColumns.image";
  });
  const partnerRent = partners.filter((partner) => {
    return partner.name === "MiNave" || partner.name === "Kovi" || partner.name === "OneCarNow";
  });
  const partnerCombustible = partners.filter((partner) => {
    return partner.name === "ARCO";
  });
  const partnerAuto = partners.filter((partner) => {
    return partner.name === "KIA" || partner.name === "Mitsubishi" || partner.name === "Nissan";
  });
  const partnerFinanzas = partners.filter((partner) => {
    return partner.name === "Consar" || partner.name === "SimpleTAX";
  });
  const partnerPrestamos = partners.filter((partner) => {
    return partner.name === "Credilikeme";
  });
  const partnerSalud = partners.filter((partner) => {
    return partner.name === "IMSS";
  });
  const partnerEducacion = partners.filter((partner) => {
    return partner.name === "Vinco";
  });

  const categoriesID = ["PartnerCombustible", "PartnerComprarAuto", "PartnerRentarAuto", "PartnerFinanzas", "PartnerPrestamos", "PartnerEducacion", "PartnerSalud"];
  
  console.log(partnerColumns);
  return (
    <Layout>
      <PartnersHero
        bgImage={didiMasHeroBgImage}
      ></PartnersHero>
      <PartnerColumns categoriesID={categoriesID} images={partnerColumns.reverse()}></PartnerColumns>
      <PartnersGrid title="Descuentos en rentar un auto" bgColor="bg-gray-light" sectionID="PartnerRentarAuto" data={partnerRent}></PartnersGrid>
      <PartnersGrid title="Descuentos en combustible" sectionID="PartnerCombustible" data={partnerCombustible}></PartnersGrid>
      <PartnersGrid title="Facilidades para comprar un auto" bgColor="bg-gray-light" sectionID="PartnerComprarAuto" data={partnerAuto}></PartnersGrid>
      <PartnersGrid title="Ayuda en tu contabilidad y en tus finanzas" sectionID="PartnerFinanzas" data={partnerFinanzas}></PartnersGrid>
      <PartnersGrid title="Préstamos" bgColor="bg-gray-light" sectionID="PartnerPrestamos" data={partnerPrestamos}></PartnersGrid>
      <PartnersGrid title="Salud y bienestar" sectionID="PartnerSalud" data={partnerSalud}></PartnersGrid>
      <PartnersGrid title="Educacion" bgColor="bg-gray-light" sectionID="PartnerEducacion" data={partnerEducacion}></PartnersGrid>
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
      filter: { title: { regex: "/(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.RewardsColumns.image)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulPartner(filter: { country: { code: { eq: "mx" } } }) {
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
