import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import EntregaBusinessHero from "../../components/sections/EntregaBusinessHero";
import EntregaBusinessColumns from "../../components/sections/EntregaBusinessColumns";

const DiDiEntregaBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const HeroBgImage = images.filter((image) => {
    return image.title === "mx.EntregaBusinessHero.bgImage";
  })[0];
  const ColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodColumns.image") !== -1;
  });

  return (
    <Layout index={false}>
      <EntregaBusinessHero bgImage={HeroBgImage}></EntregaBusinessHero>
      <EntregaBusinessColumns images={ColumnsImages}></EntregaBusinessColumns>
    </Layout>
  );
};

export default DiDiEntregaBusiness;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.EntregaBusinessHero.bgImage)|(mx.FoodColumns.image)/"
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
