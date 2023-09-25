import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditFaqHero from "../../../../components/sections/CreditCard/DiDiCreditFaqHero";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";

const Faq = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const CreditFaqHeroImage = images.filter((image) => {
    return image.title === "mx.CreditFaqHero.image";
  })[0];

  return (
    <Layout>
      <DiDiCreditFaqHero
        image={CreditFaqHeroImage}
      ></DiDiCreditFaqHero>
      <DiDiCreditFAQ  data={faqs}></DiDiCreditFAQ>
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
