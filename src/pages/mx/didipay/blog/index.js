import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiPayBlogHero from "../../../../components/sections/DiDiPayBlogHero";
import DiDiPayBlogColumns from "../../../../components/sections/DiDiPayBlogColumns";
import Pagination from "../../../../components/Pagination";

const DiDiPayBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayBlogHero.bgImage";
  })[0];
  return (
    <Layout>
      <DiDiPayBlogHero bgImage={articlesHeroBgImage}></DiDiPayBlogHero>
      <DiDiPayBlogColumns data={data}></DiDiPayBlogColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default DiDiPayBlog;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["mx.DiDiPayBlogHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "pay" }, country: { code: { eq: "mx" } } }
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
