import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPrestamosHero from "../../../components/sections/DiDiPrestamosHero";
import DiDiPayFAQs from "../../../components/sections/DiDiPayFAQs";
import FaqList from "../../../components/sections/FaqList";

const DiDiPrestamosFAQ = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];

  const faqPrestamos = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Préstamos México"
  );

  const faqsSobreNosotros = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title === "¿Qué es DiDi Préstamos?" ||
      item.title === "¿DiDi Préstamos es seguro?" ||
      item.title === "¿Dónde puedo encontrar DiDi Préstamos?" ||
      item.title ===
        "¿Cómo puedo contactar al equipo de DiDi Préstamos / ¿Pedir ayuda?"
  );
  const faqsSolicitud = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title ===
        "¿Cuáles son los requisitos para solicitar un préstamo de DiDi Préstamos?" ||
      item.title ===
        "¿En cuánto tiempo puedo obtener una respuesta después de presentar la solicitud?" ||
      item.title === "¿Cómo retirar dinero si la solicitud es aprobada?" ||
      item.title === "¿Por qué se rechazó mi solicitud de préstamo?" ||
      item.title === "¿Por qué no recibí el préstamo en mi cuenta bancaria?"
  );
  const faqsSobrePrestamos = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title === "¿Cuál es el plazo del préstamo?" ||
      item.title === "¿Cuál es el límite del préstamo?" ||
      item.title === "¿Cuál es la tasa de interés?" ||
      item.title === "¿Cómo puedo aumentar el límite del préstamo?"
  );
  const faqsPago = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title === "¿Puedo pagar mi préstamo por adelantado?" ||
      item.title === "¿Cómo puedo pagar?" ||
      item.title === "¿Cómo pago en OXXO®?" ||
      item.title === "¿Cómo pagar a través de SPEI®?" ||
      item.title ===
        "Hice una transferencia a través de SPEI® / Hice el pago en una tienda OXXO®, ¿por qué no cambió el estado del pago en la página de inicio de la aplicación?" ||
      item.title ===
        "¿Qué pasa si no pude pagar en la fecha límite de pago o antes?"
  );

  let link = `/${faqPrestamos[0].country[0].code}/prestamos/preguntas-frecuentes/`;

  return (
    <Layout schema="faq" sb={false}>
      <DiDiPrestamosHero image={homeHeroBgImage}></DiDiPrestamosHero>
      <DiDiPayFAQs
        data={faqsSobreNosotros}
        title="Sobre nosotros"
      ></DiDiPayFAQs>
      <DiDiPayFAQs data={faqsSolicitud} title="Solicitud"></DiDiPayFAQs>
      <DiDiPayFAQs
        data={faqsSobrePrestamos}
        title="Sobre DiDi Préstamos"
      ></DiDiPayFAQs>
      <DiDiPayFAQs data={faqsPago} title="Pago"></DiDiPayFAQs>
      <FaqList
        title={"Más preguntas frecuentes de DiDi Préstamos"}
        faqs={faqPrestamos[0].faq}
        link={link}
      ></FaqList>
    </Layout>
  );
};

export default DiDiPrestamosFAQ;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.PrestamosHero.image)/" } }
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
        contentful_id
        name
        faq {
          contentful_id
          title
          slug
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
        country {
          code
        }
      }
    }
  }
`;
