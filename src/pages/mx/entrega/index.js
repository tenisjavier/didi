import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import EntregaHero from "../../../components/sections/EntregaHero";
import EntregaGrid from "../../../components/sections/EntregaGrid";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const entregaBgImage = images.filter((image) => {
    return image.title === "mx.EntregaHero.bgImage";
  })[0];
  const GridImages = images.filter((image) => {
    return image.title.indexOf("EntregaGrid.image") !== -1;
  });
  return (
    <Layout index={false}>
      <EntregaHero bgImage={entregaBgImage}></EntregaHero>
      <EntregaGrid images={GridImages}></EntregaGrid>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { regex: "/(mx.EntregaHero.bgImage)|(mx.EntregaGrid.image)/" }
      }
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
