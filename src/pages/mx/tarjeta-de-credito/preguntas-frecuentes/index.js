import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditFaqHero from "../../../../components/sections/CreditCard/DiDiCreditFaqHero";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";
import FaqList from "../../../../components/sections/FaqList";

const Faq = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const CreditFaqHeroImage = images.filter((image) => {
    return image.title === "mx.CreditFaqHero.image";
  })[0];

  const creditCardLink = "/mx/tarjeta-de-credito/preguntas-frecuentes/";

  return (
    <Layout>
      <DiDiCreditFaqHero
        image={CreditFaqHeroImage}
      ></DiDiCreditFaqHero>
      <DiDiCreditFAQ  data={faqs}></DiDiCreditFAQ>
      <FaqList
        title={"Tarjeta de crédito DiDi"}
        faqs={faqs}
        link={creditCardLink}
        ></FaqList>
    </Layout>
  );
};

export default Faq;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.CreditFaqHero.image)|(mx.CreditFaqCard.image)/"
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
    allContentfulFaq (filter: {
          country: {
            code: {eq: "mx"}
          }
          type: {
            eq: "card"
          }
        }){
        nodes {
          contentful_id
          slug
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
`;
