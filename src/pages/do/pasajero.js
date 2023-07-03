import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";
import LostItemsBanner from "../../components/sections/LostItemsBanner";
import SilderSection from "../../components/sections/SliderSection";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "do.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "do.PaxHeroMobile.bgImage";
  })[0];
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHero
        bgImage={paxHeroBgImage}
        mobileBgImage={paxHeroMobileBgImage}
      ></PaxHero>
      <PaxColumns></PaxColumns>
      <LostItemsBanner></LostItemsBanner>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti "
      ></SilderSection>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default Pasajero;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "do.PaxHero.bgImage"
            "do.PaxHeroMobile.bgImage"
            "do.PaxWhyDiDi.image"
          ]
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "do" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        descriptionForPax
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
  }
`;
