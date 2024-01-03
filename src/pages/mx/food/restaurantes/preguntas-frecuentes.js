import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FaqFoodHero from "../../../../components/sections/FaqFoodHero";
import FoodFaqList from "../../../../components/sections/FoodFaqList";
import FoodFAQ from "../../../../components/sections/FoodFAQ";

const RestaurantePreguntasFrecuentes = ({ data }) => {
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
  const accordionFaqs = [
    {
      faq: data.allContentfulFaq.nodes,
    },
  ];

  return (
    <Layout schema="faq">
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFAQ title="Tienda" desc=" " data={accordionFaqs[0]}></FoodFAQ>
      <FoodFAQ title="Repartidores" desc=" " data={faqDelivery[0]}></FoodFAQ>
      <FoodFAQ title="Operaciones" desc=" " data={faqOperations[0]}></FoodFAQ>
      <FoodFAQ title="Tu Tienda" desc=" " data={faqStore[0]}></FoodFAQ>
      <FoodFaqList
        title="Repartidores"
        faqs={faqDelivery[0].faq}
        urlPrefix="/mx/food/repartidores/preguntas-frecuentes/"
      ></FoodFaqList>
      <FoodFaqList
        title="Operaciones"
        faqs={faqOperations[0].faq}
      ></FoodFaqList>
      <FoodFaqList
        title="Tu Tienda"
        faqs={faqStore[0].faq}
        urlPrefix="/mx/food/restaurantes/preguntas-frecuentes/"
      ></FoodFaqList>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: "mx.FaqFoodHero.bgImage" } }) {
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
        contentful_id
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
      }
    }
    allContentfulFaq(filter: { type: { eq: "food" } }) {
      nodes {
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
              gatsbyImageData
              __typename
            }
          }
        }
      }
    }
  }
`;

export default RestaurantePreguntasFrecuentes;
