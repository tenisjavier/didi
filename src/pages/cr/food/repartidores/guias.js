import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryHero from "../../../../components/sections/FoodDeliveryHero";
import GuidesDeliveryColumns from "../../../../components/sections/GuidesDeliveryColumns";
import Pagination from "../../../../components/Pagination";
import ArticlesColumns from "../../../../components/sections/ArticlesColumns";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const repartidoresHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  return (
    <Layout index={false}>
      <FoodDeliveryHero bgImage={repartidoresHeroBgImage}></FoodDeliveryHero>
      <ArticlesColumns data={data}></ArticlesColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["mx.FoodDeliveryHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(filter: { category: { eq: "food-courier" },  country: { code: { eq: "cr" } } }) {
      nodes {
        title
        slug
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
