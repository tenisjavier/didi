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
  const smallScreen = window.matchMedia('(max-width: 600px)').matches;
  
  return (
    <Layout>
      {!smallScreen && 
        <FoodBlogHero bgImage={articlesHeroBgImage}></FoodBlogHero>
      }
      <div className="pt-20 bg-orange-primary">
        <FoodBlogColumns className="pt-2" data={data}></FoodBlogColumns>
      </div>
      <Pagination data={data} postsPerPage={50}></Pagination>
    </Layout>
  );
};

export default FoodBlog;

export const query = graphql`
  query {
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
      sort: { updatedAt: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
        feature
      }
    }
  }
`;
