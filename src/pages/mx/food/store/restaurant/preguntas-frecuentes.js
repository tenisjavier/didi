import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import FaqFoodHero from "../../../../../components/sections/FaqFoodHero";
import FoodFaqList from "../../../../../components/sections/FoodFaqList";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.FaqFoodHero.bgImage";
  })[0];
  const faqDelivery = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Restaurant Repartidores"
  );
  const faqOperations = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Restaurant Operaciones"
  );
  const faqStore = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Restaurant Tienda"
  );
  console.log(faqDelivery);
  console.log(faqOperations);
  console.log(faqStore[0].faq);

  return (
    <Layout>
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFaqList title="Repartidores" faqs={faqDelivery[0].faq}></FoodFaqList>
      <FoodFaqList title="Operaciones" faqs={faqOperations[0].faq}></FoodFaqList>
      <FoodFaqList title="Tu Tienda" faqs={faqStore[0].faq}></FoodFaqList>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: { title: { in: "mx.FaqFoodHero.bgImage"} }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "mx" } } } }
    ) {
      nodes {
        name
        faq {
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
  }
`;

export default CentroDeAyuda;
