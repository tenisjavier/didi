import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import EntregaHero from "../../../components/sections/EntregaHero";
import EntregaGrid from "../../../components/sections/EntregaGrid";
import EntregaColumns from "../../../components/sections/EntregaColumns";
import EntregaBusinessCTA from "../../../components/sections/EntregaBusinessCTA";
import EntregaCityList from "../../../components/sections/EntregaCityList";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const entregaBgImage = images.filter((image) => {
    return image.title === "mx.EntregaHero.bgImage";
  })[0];
  const GridImages = images.filter((image) => {
    return image.title.indexOf("EntregaGrid.image") !== -1;
  });
  const ColumnsImages = images.filter((image) => {
    return image.title.indexOf("EntregaColumns.image") !== -1;
  });
  const entregaBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.EntregaBusinessCTA.image";
  })[0];
  const cities = data.allContentfulCity.nodes;

  return (
    <Layout sb={false}>
      <EntregaHero bgImage={entregaBgImage}></EntregaHero>
      <EntregaGrid images={GridImages}></EntregaGrid>
      <EntregaColumns images={ColumnsImages.reverse()}></EntregaColumns>
      <EntregaBusinessCTA image={entregaBusinessCTAImage}></EntregaBusinessCTA>
      <EntregaCityList data={cities}></EntregaCityList>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.EntregaHero.bgImage)|(mx.EntregaGrid.image)|(mx.EntregaColumns.image)|(mx.EntregaBusinessCTA.image)/"
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
    allContentfulCity(
      filter: {
        product: { elemMatch: { name: { eq: "DiDi Entrega México" } } }
        country: { code: { eq: "mx" } }
      }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
      }
    }
  }
`;
