import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import BeneficiosHero from "../../../../components/sections/Card/BeneficiosHero";
import TasasCTA from "../../../../components/sections/Card/TasasCTA";
import CreditCardFAQ from "../../../../components/sections/Card/CreditCardFAQ";

const Beneficios = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const BeneficiosHeroImage = images.filter((image) => {
    return image.title === "mx.BeneficiosHero.image";
  })[0];
  const TasasCTAImage = images.filter((image) => {
    return image.title === "mx.BeneficiosCard.image";
  })[0];

  return (
    <Layout>
      <BeneficiosHero
        image={BeneficiosHeroImage}
      ></BeneficiosHero>
      <TasasCTA
        image={TasasCTAImage}
      ></TasasCTA>
      <CreditCardFAQ data={faqs}></CreditCardFAQ>
    </Layout>
  );
};

export default Beneficios;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.BeneficiosHero.image)|(mx.BeneficiosCard.image)/"
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
