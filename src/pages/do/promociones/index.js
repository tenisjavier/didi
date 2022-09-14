import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import OffersHero from "../../../components/sections/OffersHero";
import OffersGrid from "../../../components/sections/OffersGrid";
import HomeColumns from "../../../components/sections/HomeColumns";

const Offers = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const offers = data.allContentfulOffer.nodes;

  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "au.PartnersHero.bgImage";
  })[0];

  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });

  return (
    <Layout>
      <OffersHero bgImage={partnersHeroBgImage}></OffersHero>
      <OffersGrid data={offers}></OffersGrid>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
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
      filter: { title: { regex: "/(au.PartnersHero)|(au.HomeColumns.image)/" } }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulOffer(filter: { country: { code: { eq: "do" } } }) {
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
