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
  const didiMasHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiMasHeroMobile.bgImage";
  })[0];
  const partnerColumns = images.filter((image) => {
    return image.title.indexOf("mx.RewardsColumns.image") !== -1;
  });
  const partnerRent = partners.filter((partner) => {
    return (
      partner.name === "MiNave" ||
      partner.name === "Kovi" ||
      partner.name === "OneCarNow" ||
      partner.name === "Privauto" ||
      partner.name === "Datamovil Arrendadora" ||
      partner.name === "Ventauto" ||
      partner.name === "Procapa Arrendamientos"
    );
  });

  const partnerCombustible = partners.filter((partner) => {
    return partner.name === "ARCO";
  });
  const partnerAuto = partners.filter((partner) => {
    return partner.name === "Autos a Tiempo";
  });
  const partnerFinanzas = partners.filter((partner) => {
    return (
      partner.name === "Consar" ||
      partner.name === "SimpleTAX" ||
      partner.name === "Cura Deuda"
    );
  });

  const partnerSeguros = partners.filter((partner) => {
    return partner.name === "DiAseguro";
  });

  const partnerSalud = partners.filter((partner) => {
    return partner.name === "IMSS" || partner.name === "Medismart";
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
      <PartnersHero
        bgImage={didiMasHeroBgImage}
        mobileBgImage={didiMasHeroMobileBgImage}
      ></PartnersHero>
      <PartnerColumns
        categoriesID={categoriesID}
        images={partnerColumns}
      ></PartnerColumns>
      <PartnersGrid
        title="Descuentos en combustible"
        bgColor="bg-gray-light"
        sectionID="PartnerCombustible"
        data={partnerCombustible}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos en rentar un auto"
        bgColor="bg-gray-light"
        sectionID="PartnerRentarAuto"
        data={partnerRent}
      ></PartnersGrid>

      <PartnersGrid
        title="Administración de Flotilla"
        bgColor="bg-white"
        sectionID="PartnerComprarAuto"
        data={partnerAuto}
      ></PartnersGrid>
      <PartnersGrid
        title="Contabilidad y Finanzas"
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
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiMasHeroMobile)|(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.RewardsColumns.image)/"
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
    allContentfulPartner(filter: { country: { code: { eq: "mx" } } }) {
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
