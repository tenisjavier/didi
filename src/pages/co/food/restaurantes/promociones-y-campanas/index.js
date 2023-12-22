import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../../components/Layout";
import OffersHeroSimple from "../../../../../components/sections/OffersHeroSimple";
import OffersGrid from "../../../../../components/sections/OffersGrid";

const Offers = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const offers = data.allContentfulOffer.nodes;

  const partnersHeroBgImage = images.filter((image) => {
    return image.title === "mx.PartnersHero.bgImage";
  })[0];

  return (
    <Layout>
      <OffersHeroSimple bgImage={partnersHeroBgImage}></OffersHeroSimple>
      <OffersGrid data={offers}></OffersGrid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.PartnersHero.bgImage)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulOffer(filter: { country: { code: { eq: "mx" } } }) {
      nodes {
        contentful_id
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
