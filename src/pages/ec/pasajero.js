import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxBanner from "../../components/sections/PaxBanner";
import PaxColumns from "../../components/sections/PaxColumns";
import LostItemsBanner from "../../components/sections/LostItemsBanner";
import SimplifyHero from "../../components/sections/SimplifyHero";
import SimplifyColumns from "../../components/sections/SimplifyColumns";
import SilderSection from "../../components/sections/SliderSection";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";
import HomeColumns from "../../components/sections/HomeColumns";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ec.PaxHero.bgImage";
  })[0];
  const paxHeroMobileBgImage = images.filter((image) => {
    return image.title === "ec.PaxHeroMobile.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "ec.PaxWhyDiDi.image";
  })[0];
  const simplifyHeroBgImage = images.filter((image) => {
    return image.title === "ec.SimplifyHero.bgImage";
  })[0];
  const simplifyColumnsImage = images.filter((image) => {
    return image.title === "ec.SimplifyColumns.image";
  });
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
      <SimplifyHero bgImage={simplifyHeroBgImage} reverse={true}></SimplifyHero>
      <SimplifyColumns
        images={simplifyColumnsImage.reverse()}
      ></SimplifyColumns>
      <PaxBanner></PaxBanner>
      <PaxWhyDiDi image={paxWhyDiDiImage}></PaxWhyDiDi>
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
            "ec.PaxHero.bgImage"
            "ec.PaxHeroMobile.bgImage"
            "ec.PaxWhyDiDi.image"
            "ec.SimplifyHero.bgImage"
            "ec.SimplifyColumns.image"
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
        country: { elemMatch: { code: { eq: "ec" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        contentful_id
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
