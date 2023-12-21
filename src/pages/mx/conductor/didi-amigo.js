import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiAmigoHero from "../../../components/sections/DiDiAmigoHero";
import DiDiAmigoColumns from "../../../components/sections/DiDiAmigoColumns";
import DiDiAmigoFAQ from "../../../components/sections/DiDiAmigoFAQ";
import DiDiAmigoLegal from "../../../components/sections/DiDiAmigoLegal";
import DiDiAmigoBanner from "../../../components/sections/DiDiAmigoBanner";

const DiDiAmigo = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const amigoHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiAmigoHero.bgImage";
  })[0];

  const amigoColumnsImage = images.filter((image) => {
    return image.title.indexOf("mx.DiDiAmigoColumns.image") !== -1;
  });

  return (
    <Layout>
      <DiDiAmigoHero bgImage={amigoHeroBgImage}></DiDiAmigoHero>
      <DiDiAmigoColumns images={amigoColumnsImage}></DiDiAmigoColumns>
      <DiDiAmigoFAQ faqs={faqs.reverse()}></DiDiAmigoFAQ>
      <DiDiAmigoLegal></DiDiAmigoLegal>
      <DiDiAmigoBanner></DiDiAmigoBanner>
    </Layout>
  );
};

export default DiDiAmigo;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiAmigoHero.bgImage)|(mx.DiDiAmigoColumns.image)/"
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
    allContentfulFaq(
      filter: {
        country: { code: { eq: "mx" } }
        title: {
          in: [
            "¿Cómo registrarse en DiDi Amigo?"
            "¿Cómo recibir tu recompensa?"
            "¿Cómo funciona la plataforma?"
          ]
        }
      }
    ) {
      nodes {
        contentful_id
        id
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
