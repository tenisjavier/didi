import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import FaqContent from "../../../../../components/sections/FaqContent";
import RestaurantHeroKitDigital from "../../../../../components/sections/RestaurantHeroKitDigital";

const Privacy = ({ data }) => {
  const { title, content } = data.contentfulFaq;
  const images = data.allContentfulAsset.nodes;
  const RestaurantHeroBgImage = images.filter((image) => {
    return image.title === "mx.RestaurantHeroKitDigital.bgImage";
  })[0];
  return (
    <Layout>
      <RestaurantHeroKitDigital
        bgImage={RestaurantHeroBgImage}
      ></RestaurantHeroKitDigital>
      <FaqContent title={title} content={content}></FaqContent>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulFaq(title: { eq: "Editar Plantillas con PowerPoint" }) {
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
    allContentfulAsset(
      filter: { title: { regex: "/(mx.RestaurantHeroKitDigital.bgImage)/" } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;

export default Privacy;
