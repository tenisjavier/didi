import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import EntregaBusinessHero from "../../components/sections/EntregaBusinessHero";
import EntregaBusinessColumns from "../../components/sections/EntregaBusinessColumns";
import EntregaBusinessGrid from "../../components/sections/EntregaBusinessGrid";

const DiDiEntregaBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const HeroBgImage = images.filter((image) => {
    return image.title === "mx.EntregaBusinessHero.bgImage";
  })[0];
  const ColumnsImages = images.filter((image) => {
    return image.title.indexOf("EntregaBusinessColumns.image") !== -1;
  });

  return (
    <Layout index={false}>
      <EntregaBusinessHero bgImage={HeroBgImage}></EntregaBusinessHero>
      <EntregaBusinessColumns images={ColumnsImages}></EntregaBusinessColumns>
      <EntregaBusinessGrid></EntregaBusinessGrid>
    </Layout>
  );
};

export default DiDiEntregaBusiness;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.EntregaBusinessHero.bgImage)|(mx.EntregaBusinessColumns.image)/"
        }
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
