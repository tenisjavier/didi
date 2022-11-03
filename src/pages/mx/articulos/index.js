import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesHero from "../../../components/sections/ArticlesHero";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";
import Pagination from "../../../components/Pagination";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "mx.ArticlesHero.bgImage";
  })[0];
  return (
    <Layout>
      <ArticlesHero bgImage={articlesHeroBgImage}></ArticlesHero>
      <ArticlesColumns data={data}></ArticlesColumns>
      <Pagination data={data} postsPerPage={12}></Pagination>
    </Layout>
  );
};

export default Article;

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
    allContentfulAsset(filter: { title: { in: ["mx.ArticlesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: { category: { eq: "rides" }, country: { code: { eq: "mx" } } }
      sort: { fields: updatedAt, order: DESC }
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
