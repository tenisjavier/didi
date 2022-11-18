import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuidesHero from "../../components/sections/DrvHero";
import GuidesColumns from "../../components/sections/GuidesColumns";

const Guias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const guidesHeroBgImage = images.filter((image) => {
    return image.title === "ec.GuidesHero.bgImage";
  })[0];
  return (
    <Layout>
      <GuidesHero bgImage={guidesHeroBgImage}></GuidesHero>
      <GuidesColumns data={data}></GuidesColumns>
    </Layout>
  );
};

export default Guias;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["ec.GuidesHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulGuide(
      filter: { country: { code: { eq: "ec" } } }
      sort: { updatedAt: DESC }
      limit: 10
    ) {
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
