import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticlesColumns from "../../../components/ar/ArticlesColumns";
import ArticlesHero from "../../../components/ar/ArticlesHero";
export const query = graphql`
  query {
    allContentfulArticle(filter: { country: { code: { eq: "ar" } } }) {
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
