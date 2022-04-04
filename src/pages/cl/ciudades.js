import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Directions = ({ data }) => {
  const country = data.contentfulCountry.name;
  const cities = data.contentfulCountry.city;
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvCityList
        data={cities}
        title={"Operamos en las siguientes ciudades en " + country}
        desc={
          "Descubre las ciudades de " + country + " donde esta operando Didi"
        }
      ></DrvCityList>
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
    contentfulCountry(code: { eq: "cl" }) {
      name
      city {
        name
      }
    }
  }
`;

export default Directions;
