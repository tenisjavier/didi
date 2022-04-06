import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PaxHero from "../../../components/sections/PaxHero";
import CityList from "../../../components/sections/CityList";

const Lugares = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "cl.PaxHero.bgImage";
  })[0];
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <CityList />
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
    allContentfulAsset(filter: { title: { in: ["cl.PaxHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
