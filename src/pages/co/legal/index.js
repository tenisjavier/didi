import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LegalHero from "../../../components/sections/LegalHero";
import LegalContent from "../../../components/sections/LegalContent";

const Legal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "co.HomeHero.bgImage";
  })[0];
  const content = data?.contentfulLegal?.content;

  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      {content && <LegalContent content={content}></LegalContent>}
    </Layout>
  );
};

export default Legal;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["co.HomeHero.bgImage", "co.PaxCTA.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulLegal(name: { eq: "Legal Colombia" }) {
      name
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;
