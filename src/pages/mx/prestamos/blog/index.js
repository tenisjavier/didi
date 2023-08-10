import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiPrestamosBlogHero from "../../../../components/sections/DiDiPrestamosBlogHero";
import DiDiPrestamosBlogColumns from "../../../../components/sections/DiDiPrestamosBlogColumns";
import Pagination from "../../../../components/Pagination";

const DiDiPrestamosBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayBlogHero.bgImage";
  })[0];
  return (
    <Layout>
      <DiDiPrestamosBlogHero bgImage={articlesHeroBgImage}></DiDiPrestamosBlogHero>
      <DiDiPrestamosBlogColumns data={data}></DiDiPrestamosBlogColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default DiDiPrestamosBlog;
//? Solicitar imagem nova pro Hero do Blog Prestamos?
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
      filter: { category: { eq: "prestamos" }, country: { code: { eq: "mx" } } } 
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
