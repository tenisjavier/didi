import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import OfferHero from "../../components/sections/OfferHero";
import HowToCallDiDiColumns from "../../components/sections/HowToCallDiDiColumns";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const offerHeroImage = images.filter((image) => {
    return image.title === "hk.OfferHero.image";
  })[0];

  const howToCallDiDiImage = images.filter((image) => {
    return image.title === "hk.HowToCallColumns.image";
  });
  
  return (
    <Layout>
      <OfferHero image={offerHeroImage}></OfferHero>
      <HowToCallDiDiColumns id="how-to-call" images={howToCallDiDiImage}></HowToCallDiDiColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["hk.OfferHero.image", "hk.HowToCallColumns.image"] } }
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

export default Taxi;
