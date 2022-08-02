import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TecnologiaEspaciosHero from "../../components/sections/TecnologiaEspaciosHero";
import FuncionesColumns from "../../components/sections/FuncionesColumns";
import ProtocolCTA from "../../components/sections/ProtocolCTA";
import ProtocolBullets from "../../components/sections/ProtocolBullets";
import NeutralFAQ from "../../components/sections/NeutralFAQ";

const Seguridad = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const tecnologiaEspaciosHeroBgImage = images.filter((image) => {
    return image.title === "ec.TecnologiaEspacios.bgImage";
  })[0];

  const funcionesColumnsImage = images.filter((image) => {
    return image.title === "ec.FuncionesColumns.image";
  });

  const protocolCTAImage = images.filter((image) => {
    return image.title === "ec.ProtocolSafety.image";
  })[0];
  console.log(protocolCTAImage);
  return (
    <Layout>
      <TecnologiaEspaciosHero bgImage={tecnologiaEspaciosHeroBgImage}></TecnologiaEspaciosHero>
      <FuncionesColumns images={funcionesColumnsImage.reverse()}></FuncionesColumns>
      <ProtocolCTA
        image={protocolCTAImage}
        bullets={false}
      ></ProtocolCTA>
      <ProtocolBullets image={protocolCTAImage}></ProtocolBullets>
      <NeutralFAQ></NeutralFAQ>
    </Layout>
  );
};

export default Seguridad;

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
        title: { in: ["ec.TecnologiaEspacios.bgImage", "ec.FuncionesColumns.image", "ec.ProtocolSafety.image", "ec.HelloCTA.image"] }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
