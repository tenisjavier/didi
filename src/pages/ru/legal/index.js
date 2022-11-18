import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LegalHero from "../../../components/sections/LegalHero";
import LegalColumns from "../../../components/sections/LegalColumns";

const Legal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const legalContent = data.allContentfulLegal.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.HomeHero.bgImage";
  })[0];

  const legalColumns = [];

  legalContent.forEach((node) => {
    legalColumns.push({
      title: node.name,
      btnLink: "/ru/legal/" + node.slug,
      btnText: "Читать",
      btnMode: "primary",
    });
  });

  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      <LegalColumns columns={legalColumns.reverse()}></LegalColumns>
    </Layout>
  );
};

export default Legal;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["mx.HomeHero.bgImage", "mx.PaxCTA.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulLegal(
      filter: { country: { elemMatch: { name: { eq: "Russia" } } } }
    ) {
      nodes {
        name
        slug
      }
    }
  }
`;
