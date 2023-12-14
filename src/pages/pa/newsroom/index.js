import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import NewsroomHero from "../../../components/sections/NewsroomHero";
import NewsroomColumns from "../../../components/sections/NewsroomColumns";

const Newsroom = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const articlesHeroBgImage = images.filter((image) => {
    return image.title === "cl.ArticlesHero.bgImage";
  })[0];
  return (
    <Layout>
      <NewsroomHero bgImage={articlesHeroBgImage}></NewsroomHero>
      <NewsroomColumns data={data}></NewsroomColumns>
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
      filter: { category: { eq: "news" }, country: { code: { eq: "pa" } } }
      sort: { updatedAt: DESC }
      limit: 10
    ) {
      nodes {
        contentful_id
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
