import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import FoodFaqHero from "../../../../../components/sections/FoodFaqHero";
import FaqContent from "../../../../../components/sections/FaqContent";

const FaqTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.FaqFoodHero.bgImage";
  })[0];
  const { title, content } = data.contentfulFaq;
  const productName =
    data.contentfulFaq.product != null ? data.contentfulFaq.product.name : "";

  return (
    <Layout>
      <FoodFaqHero
        title={title}
        desc={productName}
        bgImage={helpCenterBgImage}
      ></FoodFaqHero>
      <FaqContent title={title} content={content}></FaqContent>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $language: String!) {
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
      filter: { title: { regex: "/(mx.FaqFoodHero.bgImage)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulFaq(id: { eq: $id }) {
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
      product {
        name
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

export default FaqTemplate;
