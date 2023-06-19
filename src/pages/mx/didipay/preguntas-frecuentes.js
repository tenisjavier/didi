import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPayFAQHero from "../../../components/sections/DiDiPayFAQHero";
import DiDiPayFAQs from "../../../components/sections/DiDiPayFAQs";
import FaqList from "../../../components/sections/FaqList";
import DiDiPayFAQKnowMore from "../../../components/sections/DiDiPayFAQKnowMore";

const DiDiPayFAQ = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroImage = images.filter((image) => {
    return image.title === "mx.DiDiPayFAQ.image";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayFAQ.bgImage";
  })[0];
  const faqs = data.allContentfulFaq.nodes;

  const faqDiDiPay = faqs.filter((faq) => {
    return (
      faq.title === "¿Qué es DiDi Pay?" ||
      faq.title ===
        "¿Qué servicios puedo pagar con la billetera digital de DiDi Pay?" ||
      faq.title === "¿Cómo puedo pagar servicios desde la app de DiDi?" ||
      faq.title === "¿Cómo puedo comprar una tarjeta de regalo con DiDi Pay?" ||
      faq.title === "¿Cómo recargar saldo y megas desde la app de DiDi?" ||
      faq.title === "¿Qué puedo obtener con mi cuenta de DiDi Pay?" ||
      faq.title === "Vacaciones y CASHBACK con Santander" ||
      faq.title === "¿Qué hacer si la transacción falla?"
    );
  });


  let link = `/${faqDiDiPay[0].country.code}/didipay/preguntas-frecuentes/`;


  return (
    <Layout schema="faq">
      <DiDiPayFAQHero
        bgImage={homeHeroBgImage}
        image={homeHeroImage}
      ></DiDiPayFAQHero>
      <DiDiPayFAQs data={faqDiDiPay.reverse()}></DiDiPayFAQs>
      <DiDiPayFAQKnowMore></DiDiPayFAQKnowMore>
      {
        <FaqList
          title={"Preguntas Frecuentes DiDi Pay"}
          faqs={faqDiDiPay}
          link={link}
        ></FaqList>
      }
    </Layout>
  );
};

export default DiDiPayFAQ;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { regex: "/(mx.DiDiPayFAQ.image)|(mx.DiDiPayFAQ.bgImage)/" }
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
        type
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
        country {
          code
        }
      }
    }
  }
`;
