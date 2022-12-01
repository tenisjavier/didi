import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ArticlesHero from "../../components/sections/ArticlesHero";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import Pagination from "../../components/Pagination";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.ArticlesHero.bgImage";
  })[0];
  return (
    <Layout title="The Journey: News About DiDi International">
      <ArticlesHero bgImage={articlesHeroBgImage}></ArticlesHero>
      <ArticlesColumns data={data}></ArticlesColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["cl.ArticlesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulArticle(
      filter: {
        language: { eq: "en" }
        category: { eq: "pr" }
        tags: { elemMatch: { name: { eq: "DiDi International" } } }
      }
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
