import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditBeneficiosHero from "../../../../components/sections/CreditCard/DiDiCreditBeneficiosHero";
import DiDiCreditWhy from "../../../../components/sections/CreditCard/DiDiCreditWhy";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";
import DiDiCreditBeneficiosColumns from "../../../../components/sections/CreditCard/DiDiCreditBeneficiosColumns";

const Beneficios = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const BeneficiosHeroImage = images.filter((image) => {
    return image.title === "mx.BeneficiosHero.image";
  })[0];

  const imageBeneficiosColumns = [
    "Cinepolis",
    "Coderhouse",
    "Justo",
    "Radioshack",
    "Office Depot",
    "Medicato",
    "Innerassiste",
    "Mercado Libre",
    "Smartfit",
    "Envia Flores",
    "fitpass_logo"
  ];
  
  const beneficiosColumnsImage = images.filter((image) => {
    return imageBeneficiosColumns.includes(image.title);
  });

  return (
    <Layout sb={false} index={false}>
      <DiDiCreditBeneficiosHero
        image={BeneficiosHeroImage}
      ></DiDiCreditBeneficiosHero>
     <DiDiCreditBeneficiosColumns imagesdata={beneficiosColumnsImage}></DiDiCreditBeneficiosColumns>
      <DiDiCreditFAQ data={faqs}></DiDiCreditFAQ>
    </Layout>
  );
};

export default Beneficios;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.BeneficiosHero.image)|(mx.CreditFaqCard.image)|(Cinepolis)|(Coderhouse)|(Justo)|(Radioshack)|(Office Depot)|(Medicato)|(Innerassiste)|(Mercado Libre)|(Smartfit)|(Envia Flores)|(fitpass_logo)/"
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
