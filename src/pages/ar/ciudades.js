import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ar.DrvHero.bgImage";
  })[0];
  const cities = data.contentfulCountry.city;
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
    allContentfulAsset(filter: { title: { in: ["ar.DrvHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulCountry(code: { eq: "ar" }) {
      city {
        name
        slug
        image {
          description
          gatsbyImageData(width: 400)
        }
      }
    }
  }
`;

export default Ciudades;
