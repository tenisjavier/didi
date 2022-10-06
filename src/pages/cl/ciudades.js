import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "cl.DrvHero.bgImage";
  })[0];
  const cities = data.allContentfulCity.nodes;
  console.log(cities);
  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvCityList data={cities}></DrvCityList>
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
    allContentfulAsset(filter: { title: { in: ["cl.DrvHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: "cl" } } }
      sort: { fields: name }
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

export default Ciudades;
