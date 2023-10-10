import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import EntregaHero from "../../../components/sections/EntregaHero";
import EntregaGrid from "../../../components/sections/EntregaGrid";
import EntregaColumns from "../../../components/sections/EntregaColumns";
import EntregaCityList from "../../../components/sections/EntregaCityList";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const entregaBgImage = images.filter((image) => {
    return image.title === "cl.EntregaHero.bgImage";
  })[0];
  const GridImages = images.filter((image) => {
    return image.title.indexOf("EntregaGrid.image") !== -1;
  });
  const ColumnsImages = images.filter((image) => {
    return image.title.indexOf("EntregaColumns.image") !== -1;
  });

  const cities = data.allContentfulCity.nodes.filter((city) => {
    return city.name === "Santiago";
  });

  return (
    <Layout sb={false}>
      <EntregaHero bgImage={entregaBgImage}></EntregaHero>
      <EntregaGrid images={GridImages}></EntregaGrid>
      <EntregaColumns images={ColumnsImages}></EntregaColumns>
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
          regex: "/(cl.EntregaHero.bgImage)|(cl.EntregaGrid.image)|(cl.EntregaColumns.image)|(cl.EntregaBusinessCTA.image)/"
        }
      }
      sort: { title: ASC }
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
        product: { elemMatch: { name: { eq: "DiDi Entrega Chile" } } }
        country: { code: { eq: "cl" } }
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
