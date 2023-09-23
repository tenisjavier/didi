import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FuncionesHero from "../../../../components/sections/Card/FuncionesHero";
import TasasCTA from "../../../../components/sections/Card/TasasCTA";
import CreditCardFAQ from "../../../../components/sections/Card/CreditCardFAQ";
import FuncionesColumsCTA from "../../../../components/sections/Card/FuncionesColumsCTA";

const Funciones = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const FuncionesHeroImage = images.filter((image) => {
    return image.title === "mx.FuncionesHero.image";
  })[0];
  const TasasCTAImage = images.filter((image) => {
    return image.title === "mx.FuncionesCardCTA.image";
  })[0];

  const FuncionesColumnsImage = images.filter((image) => {
    return image.title === "mx.FuncionesColumns.image";
  })

  return (
    <Layout>
      <FuncionesHero
        image={FuncionesHeroImage}
      ></FuncionesHero>
      <FuncionesColumsCTA images={FuncionesColumnsImage}/>
      <TasasCTA
        image={TasasCTAImage}
      ></TasasCTA>
      <CreditCardFAQ data={faqs}></CreditCardFAQ>
    </Layout>
  );
};

export default Funciones;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FuncionesHero.image)|(mx.FuncionesCardCTA.image)|(mx.FuncionesColumns.image)/"
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
