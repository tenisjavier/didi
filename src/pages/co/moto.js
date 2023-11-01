import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHeroMoto from "../../components/sections/PaxHeroMoto";
import LostItemsBanner from "../../components/sections/LostItemsBanner";
import PaxColumnsMoto from "../../components/sections/PaxColumnsMoto";
import SilderSection from "../../components/sections/SliderSection";
import PaxWhyDiDiMoto from "../../components/sections/PaxWhyDiDiMoto";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";

const Moto = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "co.PaxHeroMoto.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "co.PaxHeroMobile.bgImage";
  })[0];
  const PaxWhyDiDiImage = images.filter((image) => {
    return image.title === "co.PaxWhyDiDiMoto.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHeroMoto
        bgImage={paxHeroBgImage}
        mobileBgImage={paxHeroMobileBgImage}
      ></PaxHeroMoto>
      <PaxColumnsMoto></PaxColumnsMoto>
      <LostItemsBanner></LostItemsBanner>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDiMoto image={PaxWhyDiDiImage}></PaxWhyDiDiMoto>
      <PaxBanner></PaxBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Moto;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.PaxHeroMoto.bgImage"
            "co.PaxHeroMobile.bgImage"
            "co.PaxWhyDiDiMoto.image"
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
        country: { elemMatch: { code: { eq: "co" } } }
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
        imageForPax {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
  }
`;
