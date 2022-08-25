import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import PrivacyHero from "../../../../components/sections/PrivacyHero";
import PrivacyCTA from "../../../../components/sections/PrivacyCTA";

const Privacy = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "do.FoodHero.bgImage";
  })[0];
  const foodAboutDeliveryCTA = images.filter((image) => {
    return image.title === "do.FoodAboutDeliveryCTA.image";
  })[0];

  return (
    <Layout>
      <PrivacyHero bgImage={homeHeroBgImage}></PrivacyHero>
      <PrivacyCTA image={foodAboutDeliveryCTA}></PrivacyCTA>
    </Layout>
  );
};

export default Privacy;

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
    allContentfulAsset(
      filter: {
        title: { in: ["do.FoodHero.bgImage", "do.FoodAboutDeliveryCTA.image"] }
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
