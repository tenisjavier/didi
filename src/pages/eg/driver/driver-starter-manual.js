import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ContentHeroRTL from "../../../components/sections/ContentHeroRTL";
import InfoContent from "../../../components/sections/InfoContent";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "eg.DrvHero.bgImage";
  })[0];

  return (
    <Layout>
      <ContentHeroRTL></ContentHeroRTL>
      <InfoContent></InfoContent>
    </Layout>
  );
};

export default Driver;

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
        title: {
          regex: "/(eg.DrvHero.bgImage)|(eg.DrvBenefits.image)/"
        }
      }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "eg" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
    contentfulCountry(code: { eq: "eg" }) {
      city {
        name
        slug
      }
    }
  }
`;
