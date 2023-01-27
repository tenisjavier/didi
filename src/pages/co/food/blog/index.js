import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodBlogHero from "../../../../components/sections/FoodBlogHero";
import FoodBlogColumns from "../../../../components/sections/FoodBlogColumns";
import Pagination from "../../../../components/Pagination";

const FoodBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.FoodHero.bgImage";
  })[0];
  return (
    <Layout>
      <div className="lg:block hidden">
        <FoodBlogHero bgImage={articlesHeroBgImage}></FoodBlogHero>
      </div>
      <div className="pt-8 lg:pt-0 bg-orange-primary">
        <FoodBlogColumns data={data}></FoodBlogColumns>
      </div>
      <Pagination data={data} postsPerPage={50}></Pagination>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["cl.FoodHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "food" }, country: { code: { eq: "co" } } }
      sort: { updatedAt: DESC }
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
