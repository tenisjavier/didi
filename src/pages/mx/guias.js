import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuidesHero from "../../components/sections/DrvHero";
import GuidesColumns from "../../components/sections/GuidesColumns";
import PaginationSEO from "../../components/PaginationSEO";

const Guias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const guias = data.allContentfulGuide.nodes;
  const guidesHeroBgImage = images.filter((image) => {
    return image.title === "mx.GuidesHero.bgImage";
  })[0];

  return (
    <Layout>
      <GuidesHero bgImage={guidesHeroBgImage}></GuidesHero>
      <GuidesColumns data={data}></GuidesColumns>
      <PaginationSEO articles={guias} postsPerPage={20}></PaginationSEO>
    </Layout>
  );
};

export default Guias;

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
    allContentfulAsset(filter: { title: { in: ["mx.GuidesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulGuide(
      filter: { category: { eq: "driver" }, country: { code: { eq: "mx" } } }
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
