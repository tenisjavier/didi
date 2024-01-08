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
  const didiMasHeroimage = images.filter((image) => {
    return image.title === "mx.ClubDiDiHero.bgImage";
  })[0];
  const didiMasHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiMasHeroMobile.bgImage";
  })[0];
  const partnerColumns = images.filter((image) => {
    return image.title.indexOf("mx.RewardsColumns.image") !== -1;
  });

  partnerColumns.sort((a, b) => {
    const numeroA = parseInt(a.title.match(/\d+/)[0], 10);
    const numeroB = parseInt(b.title.match(/\d+/)[0], 10);
    return numeroA - numeroB;
  });

  const partnerRent = partners.filter((partner) => {
    return (
      partner.name === "Mi Nave" ||
      partner.name === "Kovi" ||
      partner.name === "OneCarNow!" ||
      partner.name === "Punto" ||
      partner.name === "Votov" ||
      partner.name === "Datamovil Arrendadora" ||
      partner.name === "Ventauto" ||
      partner.name === "Mare" ||
      partner.name === "Procapa Arrendamientos" ||
      partner.name === "Veikul" ||
      partner.name === "Keko App"
    );
  });

  const partnerCombustible = partners.filter((partner) => {
    return partner.name === "ARCO" || partner.name === "Gulf";
  });
  const partnerAuto = partners.filter((partner) => {
    return partner.name === "Autos a Tiempo";
  });
  const partnerFinanzas = partners.filter((partner) => {
    return (
      partner.name === "Consar" ||
      partner.name === "Kipu" ||
      partner.name === "Swartz" ||
      partner.name === "Cura Deuda" ||
      partner.name === "Heru"
    );
  });

  const partnerSeguros = partners.filter((partner) => {
    return partner.name === "DiAseguro";
  });

  const partnerSalud = partners.filter((partner) => {
    return (
      partner.name === "IMSS" ||
      partner.name === "Medismart" ||
      partner.name === "Smart Fit" ||
      partner.name === "Lagom"
    );
  });
  const partnerEducacion = partners.filter((partner) => {
    return partner.name === "Vinco";
  });

  const partnerTelefonia = partners.filter((partner) => {
    return partner.name === "Figou" || partner.name === "Telfin";
  });

  const partnerEntretenimiento = partners.filter((partner) => {
    return partner.name === "Cinepolis" || partner.name === "Six Flags";
  });

  const partnerProductos = partners.filter((partner) => {
    return (
      partner.name === "Claro - Autos y celulares" ||
      partner.name === "Xiaomi Store" ||
      partner.name === "SpeeDee"
    );
  });

  const partnerComida = partners.filter((partner) => {
    return (
      partner.name === "7 Eleven" ||
      partner.name === "Papa John's" ||
      partner.name === "El Portón"
    );
  });

  const categoriesID = [
    "PartnerEntretenimiento",
    "PartnerProductos",
    "PartnerCombustible",
    "PartnerRentarAuto",
    "PartnerComprarAuto",
    "PartnerFinanzas",
    "PartnerSeguros",
    "PartnerSalud",
    "PartnerEducacion",
    "PartnerTelefonia",
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
        title="Descuentos en Entretenimiento"
        bgColor="bg-gray-light"
        sectionID="PartnerEntretenimiento"
        data={partnerEntretenimiento}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos en Productos"
        bgColor="bg-gray-light"
        sectionID="PartnerProductos"
        data={partnerProductos}
      ></PartnersGrid>
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
        title="Descuento en Restaurantes"
        bgColor="bg-gray-light"
        sectionID="PartnerComida"
        data={partnerComida}
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
        sectionID="PartnerSeguros"
        data={partnerSeguros}
      ></PartnersGrid>
      <PartnersGrid
        title="Salud y deportes"
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
      <PartnersGrid
        title="Telefonia"
        bgColor="bg-gray-light"
        sectionID="PartnerTelefonia"
        data={partnerTelefonia}
      ></PartnersGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiMasHeroMobile)|(mx.DiDiMasHero.image)|(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.RewardsColumns.image)/"
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
          gatsbyImageData(height: 150)
          description
        }
      }
    }
  }
`;

export default DiDiMas;
