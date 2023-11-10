import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiAiportCityHero from "../../components/sections/Airport/DiDiAiportCityHero";

const Airport = ({ data }) => {
  const { name, imageMap } = data.contentfulCity;

  return (
    <Layout>
      <DiDiAiportCityHero cityName={name} image={imageMap}></DiDiAiportCityHero>
    </Layout>
  );
};

export default Airport;

export const query = graphql`
  query ($id: String) {
    contentfulCity(id: { eq: $id }) {
      name
      slug
      imageMap {
        gatsbyImageData
      }
      product {
        name
        description
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
      country {
        code
      }
    }
  }
`;
