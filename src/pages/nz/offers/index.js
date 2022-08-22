import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import OffersHero from "../../../components/sections/OffersHero";
import OffersGrid from "../../../components/sections/OffersGrid";


const Offers = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const offers = data.allContentfulOffer.nodes;

  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "nz.PartnersHero.bgImage";
  })[0];


  return (
    <Layout>
      <OffersHero bgImage={partnersHeroBgImage}></OffersHero>
      <OffersGrid data={offers}></OffersGrid>
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
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(nz.PartnersHero.bgImage)/"
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
    allContentfulOffer(filter: { country: { code: { eq: "nz" } } }) {
      nodes {
        name
        slug
        desc
        image {
          gatsbyImageData
          description
        }
      }
    }
  }
`;

export default Offers;
