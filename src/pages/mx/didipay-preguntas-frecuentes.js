import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiPayHero from "../../components/sections/DiDiPayHero";
import DiDiPayFAQs from "../../components/sections/DiDiPayFAQs";

const DiDiPayFAQ = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroImage = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.image";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.bgImage";
  })[0];
  const faqs = data.allContentfulFaq.nodes;

  const faqDiDiPay = faqs.filter((faq) => {
    return (
      faq.title === "¿Qué es el DiDi Pay?" ||
      faq.title === "¿Cómo puedo pagar mis servicios con DiDi Pay?" ||
      faq.title === "¿Cómo puedo comprar una tarjeta de regalo con DiDi Pay?" ||
      faq.title === "¿Cómo puedo hacer una recarga telefónica con DiDi Pay?" ||
      faq.title === "¿En qué ciudades opera DiDi Pay?" ||
      faq.title === "¿Qué puedo obtener con mi cuenta de DiDi Pay?" ||
      faq.title === "Mi transacción falló" ||
      faq.title === "¿Por qué no tengo acceso a DiDi Pay?" ||
      faq.title === "¿Cómo me puedo contactar con Soporte DiDi?" ||
      faq.title === "¿Qué servicios puedo pagar a través de DiDi Pay?"
    );
  });

  return (
    <Layout>
      <DiDiPayHero
        bgImage={homeHeroBgImage}
        image={homeHeroImage}
      ></DiDiPayHero>
      <DiDiPayFAQs data={faqDiDiPay.reverse()}></DiDiPayFAQs>
    </Layout>
  );
};

export default DiDiPayFAQ;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayHomeHero.image)|(mx.DiDiPayHomeHero.bgImage)/"
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

    allContentfulFaq(filter: { country: { code: { eq: "mx" } } }) {
      nodes {
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
    }
  }
`;
