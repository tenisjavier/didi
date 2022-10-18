import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBlogHero from "../../../../components/sections/FoodBlogHero";
import FoodBlogColumns from "../../../../components/sections/FoodBlogColumns";
import Pagination from "../../../../components/Pagination";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  return (
    <Layout>
      <FoodBlogHero bgImage={articlesHeroBgImage}></FoodBlogHero>
      <FoodBlogColumns data={data}></FoodBlogColumns>
      <Pagination data={data} postsPerPage={12}></Pagination>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(filter: { title: { in: ["mx.FoodHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "food" }, country: { code: { eq: "mx" } } }
      sort: { fields: content___references___updatedAt, order: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
