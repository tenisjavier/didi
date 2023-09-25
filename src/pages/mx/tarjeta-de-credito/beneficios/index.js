import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditBeneficiosHero from "../../../../components/sections/CreditCard/DiDiCreditBeneficiosHero";
import DiDiCreditWhy from "../../../../components/sections/CreditCard/DiDiCreditWhy";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";

const Beneficios = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const BeneficiosHeroImage = images.filter((image) => {
    return image.title === "mx.BeneficiosHero.image";
  })[0];
  const cardWhyImage = images.filter((image) => {
    return image.title === "mx.CreditFaqCard.image";
  })[0];

  return (
    <Layout sb={false} index={false}>
      <DiDiCreditBeneficiosHero
        image={BeneficiosHeroImage}
      ></DiDiCreditBeneficiosHero>
      {/* <DiDiCreditWhy image={cardWhyImage}></DiDiCreditWhy> */}
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
          regex: "/(mx.BeneficiosHero.image)|(mx.CreditFaqCard.image)/"
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
