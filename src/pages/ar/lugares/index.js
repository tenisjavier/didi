import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PaxHero from "../../../components/sections/PaxHero";
import CityList from "../../../components/sections/CityList";

const Lugares = ({ data }) => {
  const cities = data.contentfulCountry.city;
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ar.PaxHero.bgImage";
  })[0];
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <CityList cities={cities} />
    </Layout>
  );
};

export default Lugares;

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
    contentfulCountry(code: { eq: "ar" }) {
      name
      code
      city {
        name
        slug
      }
    }
    allContentfulAsset(filter: { title: { in: ["ar.PaxHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
