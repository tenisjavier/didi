import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import NewsroomHero from "../../../components/sections/NewsroomHero";
import NewsroomColumns from "../../../components/sections/NewsroomColumns";
import Pagination from "../../../components/Pagination";

const Newsroom = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.ArticlesHero.bgImage";
  })[0];
  return (
    <Layout>
      <NewsroomHero bgImage={articlesHeroBgImage}></NewsroomHero>
      <NewsroomColumns data={data}></NewsroomColumns>
      <Pagination data={data} postsPerPage={20}></Pagination>
    </Layout>
  );
};

export default Newsroom;

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
      filter: { category: { eq: "news" }, country: { code: { eq: "mx" } } }
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
