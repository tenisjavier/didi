import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import PartnersFoodHero from "../../../../components/sections/PartnersFoodHero";
import PartnersGrid from "../../../../components/sections/PartnersGrid";
import PartnerFoodColumns from "../../../../components/sections/PartnerFoodColumns";

const DiDiMas = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const didiMasHeroBgImage = images.filter((image) => {
    return image.title === "mx.ClubDiDiHero.bgImage";
  })[0];
  const partnerColumns = images.filter((image) => {
    return image.title === "mx.ClubDiDiCategoryColumns.image";
  });
  const partnerGanancias = partners.filter((partner) => {
    return partner.name === "Figou" || partner.name === "Enconta";
  });
  const partnerReconocimento = partners.filter((partner) => {
    return partner.name === "DiDi Food Leyenda";
  });
  const partnerBienestar = partners.filter((partner) => {
    return partner.name === "Coberturas de Seguro";
  });
  const partnerFormacion = partners.filter((partner) => {
    return (
      partner.name === "Guias DiDi Food" ||
      partner.name === "Consar" ||
      partner.name === "Vinco"
    );
  });

  const categoriesID = [
    "PartnerGanancias",
    "PartnerReconocimento",
    "PartnerBienestar",
    "PartnerFormacion",
  ];

  return (
    <Layout>
      <PartnersFoodHero bgImage={didiMasHeroBgImage}></PartnersFoodHero>
      <PartnerFoodColumns
        categoriesID={categoriesID}
        images={partnerColumns.reverse()}
      ></PartnerFoodColumns>
      <PartnersGrid
        title="Ganancias"
        desc="Conoce a nuestros aliados y sus ofertas exclusivas para Socios Repartidores que utilizan la app de DiDi Food."
        bgColor="bg-gray-light"
        sectionID="PartnerGanancias"
        data={partnerGanancias.reverse()}
      ></PartnersGrid>
      <PartnersGrid
        title="Reconocimiento"
        desc="Descubre las distintas iniciativas de reconocimiento para Socios Repartidores que realizan entregas a través del app de DiDi Food."
        sectionID="PartnerReconocimento"
        data={partnerReconocimento.reverse()}
      ></PartnersGrid>
      <PartnersGrid
        title="Bienestar"
        desc="En DiDi Food, la seguridad de los Socios Repartidores es prioridad. Descubre los servicios exclusivos relacionados con el bienestar que tenemos."
        bgColor="bg-gray-light"
        sectionID="PartnerBienestar"
        data={partnerBienestar.reverse()}
      ></PartnersGrid>
      <PartnersGrid
        title="Formación"
        desc="Conoce los distintos recursos que tenemos para ti relacionados con temas educativos."
        sectionID="PartnerFormacion"
        data={partnerFormacion.reverse()}
      ></PartnersGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.ClubDiDiHero.bgImage)|(mx.PartnerCTA)|(mx.ClubDiDiCategoryColumns.image)/"
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
