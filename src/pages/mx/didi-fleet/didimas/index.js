import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiFleetDiDiMasPartnersHero from "../../../../components/sections/DiDiFleetDiDiMasPartnersHero";
import PartnersGrid from "../../../../components/sections/PartnersGrid";
import DiDiFleetDiDiMasPartnerColumns from "../../../../components/sections/DiDiFleetDiDiMasPartnerColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;

  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFleetHero.bgImage";
  })[0];
  const didiMasHeroimage = images.filter((image) => {
    return image.title === "mx.ClubDiDiHero.bgImage";
  })[0];
  const didiMasHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiFleetHeroMobile.bgImage";
  })[0];
  const partnerColumns = images.filter((image) => {
    return image.title.indexOf("mx.RewardsColumns.image") !== -1;
  });

  partnerColumns.sort((a, b) => {
    const numeroA = parseInt(a.title.match(/\d+/)[0], 10);
    const numeroB = parseInt(b.title.match(/\d+/)[0], 10);
    return numeroA - numeroB;
  });

  const partnerSeguros = partners.filter((partner) => {
    return partner.name === "DiAseguro";
  });

  const partnerFinanzas = partners.filter((partner) => {
    return (
      partner.name === "Cura Deuda" ||
      partner.name === "Swartz" ||
      partner.name === "Heru"
    );
  });

  const partnerSalud = partners.filter((partner) => {
    return (
      partner.name === "Medismart" ||
      partner.name === "Lagom"
    );
  });

  const partnerCombustible = partners.filter((partner) => {
    return partner.name === "ARCO" || partner.name === "Gulf";
  });

  const partnerOthers = partners.filter((partner) => {
    return (
      partner.name === "Vinco" ||
      partner.name === "Cinepolis" ||
      partner.name === "Claro - Autos y celulares",
      partner.name === "Figou"
    );
  });

  const categoriesID = [
    "PartnerSeguros",
    "PartnerFinanzas",
    "PartnerSalud",
    "PartnerCombustible",
    "PartnerOthers"
  ];

  return (
    <Layout>
      <DiDiFleetDiDiMasPartnersHero
        bgImage={didiMasHeroBgImage}
        mobileBgImage={didiMasHeroMobileBgImage}
      ></DiDiFleetDiDiMasPartnersHero>
      <DiDiFleetDiDiMasPartnerColumns
        categoriesID={categoriesID}
        images={partnerColumns}
      ></DiDiFleetDiDiMasPartnerColumns>
      <PartnersGrid
        title="Descuentos en Seguro de Auto"
        bgColor="bg-white"
        sectionID="PartnerSeguros"
        data={partnerSeguros}
      ></PartnersGrid>
      <PartnersGrid
        title="Contabilidad y Finanzas"
        bgColor="bg-gray-light"
        sectionID="PartnerFinanzas"
        data={partnerFinanzas}
      ></PartnersGrid>
      <PartnersGrid
        title="Salud y deportes"
        bgColor="bg-gray-light"
        sectionID="PartnerSalud"
        data={partnerSalud}
      ></PartnersGrid>
      <PartnersGrid
        title="Descuentos en combustible"
        bgColor="bg-gray-light"
        sectionID="PartnerCombustible"
        data={partnerCombustible}
      ></PartnersGrid>
      <PartnersGrid
        title="Otros beneficios"
        bgColor="bg-gray-light"
        sectionID="PartnerOthers"
        data={partnerOthers}
      ></PartnersGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiFleetHero.bgImage)|(mx.DiDiFleetHeroMobile.bgImage)|(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.RewardsColumns.image)/"
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
