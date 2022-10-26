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
    return (
      partner.name === "MiNave" ||
      partner.name === "Kovi" ||
      partner.name === "OneCarNow" ||
      partner.name === "Privauto" ||
      partner.name === "Autos a Tiempo" ||
      partner.name === "Procapa Arrendamientos"
    );
  });
  const partnerRefacciones = partners.filter((partner) => {
    return partner.name === "Nissan";
  });
  const partnerCombustible = partners.filter((partner) => {
    return partner.name === "ARCO";
  });
  const partnerAuto = partners.filter((partner) => {
    return (
      partner.name === "Nissan" ||
      partner.name === "Dalton Seminuevos" ||
      partner.name === "Datamovil Arrendadora"
    );
  });
  const partnerFinanzas = partners.filter((partner) => {
    return partner.name === "Consar" || partner.name === "SimpleTAX";
  });

  const partnerSeguros = partners.filter((partner) => {
    return partner.name === "Qualitas";
  });

  const partnerSalud = partners.filter((partner) => {
    return partner.name === "IMSS";
  });
  const partnerEducacion = partners.filter((partner) => {
    return partner.name === "Vinco";
  });

  const categoriesID = [
    "PartnerCombustible",
    "PartnerComprarAuto",
    "PartnerRentarAuto",
    "PartnerFinanzas",
    "PartnerPrestamos",
    "PartnerEducacion",
    "PartnerSalud",
  ];

  return (
    <Layout>
      <PartnersHero bgImage={didiMasHeroBgImage}></PartnersHero>
      <PartnerColumns
        categoriesID={categoriesID}
        images={partnerColumns.reverse()}
      ></PartnerColumns>
      <PartnersGrid
        title="Descuentos en rentar un auto"
        bgColor="bg-gray-light"
        sectionID="PartnerRentarAuto"
        data={partnerRent}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos para refacciones y autopartes"
        bgColor="bg-white"
        sectionID="PartnerRefacciones"
        data={partnerRefacciones}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos en combustible"
        bgColor="bg-gray-light"
        sectionID="PartnerCombustible"
        data={partnerCombustible}
      ></PartnersGrid>
      <PartnersGrid
        title="Facilidades para comprar un auto"
        bgColor="bg-white"
        sectionID="PartnerComprarAuto"
        data={partnerAuto}
      ></PartnersGrid>
      <PartnersGrid
        title="Ayuda en tu contabilidad y en tus finanzas"
        bgColor="bg-gray-light"
        sectionID="PartnerFinanzas"
        data={partnerFinanzas}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos en Seguro de Auto"
        bgColor="bg-white"
        sectionID="PartnerSalud"
        data={partnerSeguros}
      ></PartnersGrid>
      <PartnersGrid
        title="Salud y bienestar"
        bgColor="bg-gray-light"
        sectionID="PartnerSalud"
        data={partnerSalud}
      ></PartnersGrid>
      <PartnersGrid
        title="Educacion"
        bgColor="bg-white"
        sectionID="PartnerEducacion"
        data={partnerEducacion}
      ></PartnersGrid>
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
      filter: {
        title: {
          regex: "/(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.RewardsColumns.image)/"
        }
      }
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
