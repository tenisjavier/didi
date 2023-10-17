import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FaqFoodHero from "../../../../components/sections/FaqFoodHero";
import FoodFAQ from "../../../../components/sections/FoodFAQ";
import FaqList from "../../../../components/sections/FaqList";

const RepartidoresPreguntasFrecuentes = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.FaqFoodHero.bgImage";
  })[0];

  const faqDelivery = [
    {
      faq: data.allContentfulFaq.nodes
    }
  ]

  const linkRepartidores = `/cr/food/repartidores/preguntas-frecuentes/`

  return (
    <Layout schema="faq">
      <FaqFoodHero bgImage={helpCenterBgImage}></FaqFoodHero>
      <FoodFAQ title="Repartidores" desc=" " data={faqDelivery[0]}></FoodFAQ>
      <FaqList
        title={"Repartidores"}
        faqs={faqDelivery[0].faq}
        link={linkRepartidores}
        ></FaqList>
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

    allContentfulFaq(
      filter: {
        country:  { code: { eq: "cr" } } 
        type: { eq: "delivery" }
      }
    ) {
      nodes {
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

export default RepartidoresPreguntasFrecuentes;
