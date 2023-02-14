import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPrestamosHero from "../../../components/sections/DiDiPrestamosHero";
import DiDiPrestamosColumns from "../../../components/sections/DiDiPrestamosColumns";
import DiDiPrestamosWhyDiDi from "../../../components/sections/DiDiPrestamosWhyDiDi";
import DiDiPrestamosFeatures from "../../../components/sections/DiDiPrestamosFeatures";
import DiDiPrestamosReviews from "../../../components/sections/DiDiPrestamosReviews";
import DiDiPrestamosPress from "../../../components/sections/DiDiPrestamosPress";
import DiDiPayFAQs from "../../../components/sections/DiDiPayFAQs";

const DiDiPrestamos = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];
  const prestamoWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.PrestamosWhyDiDi.image";
  })[0];
  const prestamosFeaturesImage = images.filter((image) => {
    return image.title === "mx.PrestamosFeatures.image";
  })[0];
  const faqsSobreNosotros = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title === "¿Qué es DiDi Préstamos?" ||
      item.title === "¿DiDi Préstamos es seguro?" ||
      item.title === "¿Dónde puedo encontrar DiDi Préstamos?" ||
      item.title ===
        "¿Cuáles son los requisitos para solicitar un préstamo de DiDi Préstamos?" ||
      item.title === "¿Cómo retirar dinero si la solicitud es aprobada?"
  );
  return (
    <Layout index={false}>
      <DiDiPrestamosHero image={homeHeroBgImage}></DiDiPrestamosHero>
      <DiDiPrestamosColumns></DiDiPrestamosColumns>
      <DiDiPrestamosWhyDiDi image={prestamoWhyDiDiImage}></DiDiPrestamosWhyDiDi>
      <DiDiPrestamosFeatures
        image={prestamosFeaturesImage}
      ></DiDiPrestamosFeatures>
      <DiDiPrestamosReviews></DiDiPrestamosReviews>
      <DiDiPrestamosPress></DiDiPrestamosPress>
      <DiDiPayFAQs
        data={faqsSobreNosotros}
        title="Preguntas Frecuentes"
      ></DiDiPayFAQs>
    </Layout>
  );
};

export default DiDiPrestamos;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.PrestamosHero.image)|(mx.PrestamosFeatures.image)|(mx.PrestamosWhyDiDi.image)/"
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        name: { eq: "DiDi Préstamos México" }
      }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
