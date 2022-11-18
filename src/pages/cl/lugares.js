import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import CityList from "../../components/sections/CityList";

const Lugares = ({ data }) => {
  const cities = data.contentfulCountry.city;
  const country = data.contentfulCountry.name;
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "cl.PaxHero.bgImage";
  })[0];
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <CityList country={country} cities={cities} />
    </Layout>
  );
};

export default Lugares;

export const query = graphql`
  query {
    contentfulCountry(code: { eq: "cl" }) {
      name
      code
      city {
        name
        slug
        image {
          description
          gatsbyImageData(width: 400)
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
