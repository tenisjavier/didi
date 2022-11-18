import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import OffersHero from "../../../components/sections/OffersHero";
import OffersGrid from "../../../components/sections/OffersGrid";

const Offers = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const offers = data.allContentfulOffer.nodes;

  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "au.PartnersHero.bgImage";
  })[0];

  return (
    <Layout>
      <OffersHero bgImage={partnersHeroBgImage}></OffersHero>
      <OffersGrid data={offers}></OffersGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(au.PartnersHero)/" } }
      sort: { title: ASC }
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
