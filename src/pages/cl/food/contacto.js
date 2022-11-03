import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodContactHero from "../../../components/sections/FoodContactHero";
import ContactInfo from "../../../components/sections/ContactInfo";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodContactHeroBgImage = images.filter((image) => {
    return image.title === "do.FoodContactHero.bgImage";
  })[0];

  return (
    <Layout>
      <FoodContactHero bgImage={foodContactHeroBgImage}></FoodContactHero>
      <ContactInfo></ContactInfo>
    </Layout>
  );
};

export default FoodDelivery;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["food"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: ["do.FoodContactHero.bgImage", "au.ContactBenefits.image"]
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
  }
`;
