import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPrestamosHero from "../../../components/sections/DiDiPrestamosHero";
import DiDiPayFAQs from "../../../components/sections/DiDiPayFAQs";

const DiDiPrestamosFAQ = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.bgImage";
  })[0];
  const faqs = data.allContentfulProduct.nodes[0].faq;

  return (
    <Layout>
      <DiDiPrestamosHero bgImage={homeHeroBgImage}></DiDiPrestamosHero>
      <DiDiPayFAQs data={faqs.reverse()}></DiDiPayFAQs>
    </Layout>
  );
};

export default DiDiPrestamosFAQ;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.PrestamosHero.bgImage)/" } }
    ) {
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
        name: { eq: "DiDi Préstamos México" }
      }
    ) {
      nodes {
        name
        faq {
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
  }
`;
