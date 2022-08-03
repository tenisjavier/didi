import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import LeonesHero from "../../components/sections/LeonesHero";
import KnowMoreBannerLeones from "../../components/sections/KnowMoreBannerLeones"
import LeonesVideoGrid from "../../components/sections/LeonesVideoGrid";
import TableBannerLeones from "../../components/sections/TableBannerLeones"

const Leones = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const leonesHeroBgImage = images.filter((image) => {
    return image.title === "cr.LeonesHero.bgImage";
  })[0];
  const leonesLogo = images.filter((image) => {
    return image.title === "cr.LeonesLogo.image";
  })[0];
  const leonesTabela = images.filter((image) => {
    return image.title === "cr.LeonesTabela.image";
  })[0];

  return (
    <Layout>
      <LeonesHero bgImage={leonesHeroBgImage} image={leonesLogo}></LeonesHero>
      <KnowMoreBannerLeones></KnowMoreBannerLeones>
      <LeonesVideoGrid></LeonesVideoGrid>
      <TableBannerLeones image={leonesTabela}></TableBannerLeones>
    </Layout>
  );
};

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
    allContentfulAsset(
      filter: { title: { in: ["cr.LeonesHero.bgImage", "cr.LeonesLogo.image", "cr.LeonesTabela.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;

export default Leones;
