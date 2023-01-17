import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ArticlesHero from "../../components/sections/ArticlesHero";
import ArticlesTopStory from "../../components/sections/ArticlesTopStory";
import ArticlesColumns from "../../components/sections/ArticlesColumns";
import Pagination from "../../components/Pagination";

const Article = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articles = data.allContentfulArticle.nodes;
  let articleTS = "";
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.ArticlesHero.bgImage";
  })[0];

  const isTopStory = articles.filter((article) => {
    return article.topStory === true;
  });

  if(isTopStory !== null && isTopStory !== undefined && isTopStory.length !== 0) {
    articleTS = <ArticlesTopStory data={isTopStory}></ArticlesTopStory>
  } else {
    articleTS = "";
  }
  
  return (
    <Layout
      title="The Journey Dominican Ecuador: News About DiDi in Ecuador"
      password={true}
    >
      <ArticlesHero bgImage={articlesHeroBgImage}></ArticlesHero>
      {articleTS}
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
        country: { code: { eq: "ec" } }
      }
      sort: { updatedAt: DESC }
    ) {
      nodes {
        title
        slug
        excerpt
        category
        topStory
        readTime
        featuredImage {
          gatsbyImageData
        }
        content {
          raw
        }
      }
    }
  }
`;
