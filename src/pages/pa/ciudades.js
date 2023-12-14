import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "pa.DrvHero.bgImage";
  })[0];
  const cities = data.allContentfulCity.nodes;
  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvCityList data={cities}></DrvCityList>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["pa.DrvHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: "pa" } } }
      sort: { name: ASC }
    ) {
      nodes {
        contentful_id
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

export default Ciudades;
