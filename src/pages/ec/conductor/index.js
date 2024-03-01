import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
import DrvWhyDiDi from "../../../components/sections/DrvWhyDiDi";
import DrvCityList from "../../../components/sections/DrvCityList";
import HomeColumns from "../../../components/sections/PaxColumns";
import SilderSection from "../../../components/sections/SliderSection";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";
import PaxCTAApp from "../../../components/sections/PaxCTAApp";

import DrvHeroB from "../../../components/sections/DrvHeroB";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ec.DrvHero.bgImage";
  })[0];
  const imagehero = images.filter((image) => {
    return image.title === "Driver GIF";
  })[0];
  const drvHeroMobileBgImage = images.filter((image) => {
    return image.title === "ec.DrvHeroMobile.bgImage";
  })[0];
  const drvWhyDiDiImage = images.filter((image) => {
    return image.title === "ec.DrvWhyDiDi.image";
  })[0];
  const paxCTAAppImage = images.filter((image) => {
    return image.title === "ec.PaxCTAApp.image";
  })[0];

  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <DrvHeroB image={imagehero}></DrvHeroB>

      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <Requirements data={products}></Requirements>
      <PaxCTAApp image={paxCTAAppImage}></PaxCTAApp>
      <DrvWhyDiDi image={drvWhyDiDiImage}></DrvWhyDiDi>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
      {cities != null && <DrvCityList data={cities}></DrvCityList>}
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "ec.DrvHero.bgImage"
            "ec.DrvHeroMobile.bgImage"
            "ec.DrvWhyDiDi.image"
            "ec.DrvFeatures.image"
            "ec.PaxCTAApp.image"
            "Driver GIF"
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
        name
        description
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
    allContentfulCity(
      filter: { country: { code: { eq: "ec" } } }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
      }
    }
  }
`;
