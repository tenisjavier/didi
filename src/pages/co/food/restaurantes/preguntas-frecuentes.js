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

  return (
    <Layout schema="faq">
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFAQ title="Repartidores" desc=" " data={faqDelivery[0]}></FoodFAQ>
      <FoodFAQ title="Operaciones" desc=" " data={faqOperations[0]}></FoodFAQ>
      <FoodFAQ title="Tu Tienda" desc=" " data={faqStore[0]}></FoodFAQ>
      <FoodFaqList
        title="Repartidores"
        faqs={faqDelivery[0].faq}
        urlPrefix="/co/food/repartidores/preguntas-frecuentes/"
      ></FoodFaqList>
      <FoodFaqList
        title="Operaciones"
        faqs={faqOperations[0].faq}
      ></FoodFaqList>
      <FoodFaqList
        title="Tu Tienda"
        faqs={faqStore[0].faq}
        urlPrefix="/co/food/restaurantes/preguntas-frecuentes/"
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
        contentful_id
        name
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
  }
`;

export default RestaurantePreguntasFrecuentes;
