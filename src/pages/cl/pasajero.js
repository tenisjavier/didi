import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "cl.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "cl.PaxHeroMobile.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "cl.PaxWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHero
        bgImage={paxHeroBgImage}
        mobileBgImage={paxHeroMobileBgImage}
      ></PaxHero>
      <PaxColumns></PaxColumns>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDi image={paxWhyDiDiImage}></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
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
            "cl.PaxHero.bgImage"
            "cl.PaxHeroMobile.bgImage"
            "cl.PaxWhyDiDi.image"
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
        country: { elemMatch: { code: { eq: "cl" } } }
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
