import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FaqFoodHero from "../../../components/sections/FaqFoodHero";
import FoodFAQ from "../../../components/sections/FoodFAQ";
import MoreQuestionsCTA from "../../../components/sections/MoreQuestionsCTA";

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

  return (
    <Layout>
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFAQ title="Repartidores" desc=" " data={faqDelivery[0]}></FoodFAQ>
      <FoodFAQ title="Operaciones" desc=" " data={faqOperations[0]}></FoodFAQ>
      <FoodFAQ title="Tu Tienda" desc=" " data={faqStore[0]}></FoodFAQ>
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
