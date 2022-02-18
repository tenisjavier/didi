import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesColumns from "../../../components/sections/ArticlesColumns";
import ArticlesHero from "../../../components/sections/ArticlesHero";
export const query = graphql`
  query {
    allContentfulArticle {
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

const Article = ({ data }) => {
  return (
    <Layout>
      <ArticlesHero></ArticlesHero>
      <ArticlesColumns data={data}></ArticlesColumns>
    </Layout>
  );
};

export default Article;
