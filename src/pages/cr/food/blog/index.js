import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBlogHero from "../../../../components/sections/FoodBlogHero";
import FoodBlogColumns from "../../../../components/sections/FoodBlogColumns";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cr.FoodHero.bgImage";
  })[0];
  return (
    <Layout>
      <FoodBlogHero bgImage={articlesHeroBgImage}></FoodBlogHero>
      <FoodBlogColumns data={data}></FoodBlogColumns>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["cr.FoodHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "food" }, country: { code: { eq: "cr" } } }
      sort: { updatedAt: DESC }
      limit: 10
    ) {
      nodes {
        title
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
