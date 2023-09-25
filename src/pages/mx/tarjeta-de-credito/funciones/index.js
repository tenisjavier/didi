import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditFuncionesHero from "../../../../components/sections/CreditCard/DiDiCreditFuncionesHero";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";
import DiDiCreditFuncionesColumsCTA from "../../../../components/sections/CreditCard/DiDiCreditFuncionesColumsCTA";
import DiDiCreditWhy from "../../../../components/sections/CreditCard/DiDiCreditWhy";


const Funciones = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const FuncionesHeroImage = images.filter((image) => {
    return image.title === "mx.FuncionesHero.image";
  })[0];

  const cardWhyImage = images.filter((image) => {
    return image.title === "mx.CreditFaqCard.image";
  })[0];

  const funcionesColumnsImage = images.filter((image) => {
    return image.title === "mx.FuncionesColumns.image";
  })

  return (
    <Layout>
      <DiDiCreditFuncionesHero
        image={FuncionesHeroImage}
      ></DiDiCreditFuncionesHero>
      <DiDiCreditFuncionesColumsCTA images={funcionesColumnsImage}/>
      {/* <DiDiCreditWhy image={cardWhyImage}></DiDiCreditWhy> */}
      <DiDiCreditFAQ data={faqs}></DiDiCreditFAQ>
    </Layout>
  );
};

export default Funciones;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FuncionesHero.image)|(mx.CreditFaqCard.image)|(mx.FuncionesColumns.image)/"
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
