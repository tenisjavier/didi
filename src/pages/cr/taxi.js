import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import Requirements from "../../components/sections/Requirements";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";
import TaxiVFE from "../../components/sections/Taxi/TaxiVFE";

import TaxiSafety from "../../components/sections/Taxi/TaxiSafety";
import TaxiContact from "../../components/sections/Taxi/TaxiContact";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "cr.TaxiHero.bgImage";
  })[0];

  const taxiHeroMobileBgImage = images.filter((image) => {
    return image.title === "cr.TaxiHeroMobile.bgImage";
  })[0];
  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "cl.TaxiWhyDiDi.image";
  })[0];

  const taxiGIImage = images.filter((image) => {
    return image.title === "mx.TaxiGI.image";
  })[0];

  const safetyCTAImage = images.filter((image) => {
    return image.title === "mx.SafetyCTA.image";
  })[0];

  const products = data.allContentfulProduct.nodes;

  return (
    <Layout>
      <TaxiHero
        bgImage={taxiHeroBgImage}
        mobileBgImage={taxiHeroMobileBgImage}
      ></TaxiHero>
      <TaxiVFE image={taxiGIImage}></TaxiVFE>
      <Requirements data={products}></Requirements>
      <TaxiSafety image={safetyCTAImage}></TaxiSafety>
      <TaxiContact image={taxiWhyDiDiImage}></TaxiContact>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "cr.TaxiHero.bgImage"
            "cr.TaxiHeroMobile.bgImage"
            "cl.TaxiWhyDiDi.image"
            "mx.TaxiGI.image"
            "mx.SafetyCTA.image"
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
        country: { elemMatch: { code: { eq: "cr" } } }
        name: { eq: "DiDi Taxi Costa Rica" }
      }
    ) {
      nodes {
        contentful_id
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Taxi;
