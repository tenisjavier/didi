import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";
import LostItemsBanner from "../../components/sections/LostItemsBanner";
import SilderSection from "../../components/sections/SliderSection";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "pa.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "pa.PaxHeroMobile.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "pa.PaxWhyDiDi.image";
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
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDi image={paxWhyDiDiImage}></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
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
            "pa.PaxHero.bgImage"
            "pa.PaxHeroMobile.bgImage"
            "pa.PaxWhyDiDi.image"
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
        country: { elemMatch: { code: { eq: "pa" } } }
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
