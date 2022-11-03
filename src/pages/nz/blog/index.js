import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";
import ArticlesHero from "../../../components/sections/ArticlesHero";
import Pagination from "../../../components/Pagination";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "nz.PaxHero.bgImage";
  })[0];

  return (
    <Layout>
      <ArticlesHero bgImage={articlesHeroBgImage}></ArticlesHero>
      <ArticlesColumns data={data}></ArticlesColumns>
      <Pagination data={data} postsPerPage={6}></Pagination>
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
    allContentfulAsset(filter: { title: { in: ["nz.PaxHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: {
        category: { in: ["rides", "news"] }
        country: { code: { eq: "nz" } }
      }
      sort: { fields: updatedAt, order: DESC }
      limit: 20
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
