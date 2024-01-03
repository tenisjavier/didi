import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FaqFoodHero from "../../../components/sections/FaqFoodHero";
import FoodFAQ from "../../../components/sections/FoodFAQ";
import MoreQuestionsCTA from "../../../components/sections/MoreQuestionsCTA";
import FaqList from "../../../components/sections/FaqList";

const FoodPreguntasFrecuentes = ({ data }) => {
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

  const link = `/mx/food/restaurantes/preguntas-frecuentes/`;
  const linkRepartidores = `/mx/food/repartidores/preguntas-frecuentes/`;

  return (
    <Layout schema="faq">
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFAQ title="Repartidores" desc=" " data={faqDelivery[0]}></FoodFAQ>
      <FoodFAQ title="Operaciones" desc=" " data={faqOperations[0]}></FoodFAQ>
      <FoodFAQ title="Tu Tienda" desc=" " data={faqStore[0]}></FoodFAQ>
      <FaqList
        title={"Repartidores"}
        faqs={faqDelivery[0].faq}
        link={linkRepartidores}
      ></FaqList>
      <FaqList
        title={"Operaciones"}
        faqs={faqOperations[0].faq}
        link={link}
      ></FaqList>
      <FaqList title={"Tu Tienda"} faqs={faqStore[0].faq} link={link}></FaqList>
      <MoreQuestionsCTA></MoreQuestionsCTA>
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
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        category: { eq: "food" }
      }
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
  }
`;

export default FoodPreguntasFrecuentes;
