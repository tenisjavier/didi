import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvMotoHero from "../../../components/sections/DrvMotoHero";
import DrvColumns from "../../../components/sections/DrvColumns";
import HomeColumns from "../../../components/sections/PaxColumns";
import Requirements from "../../../components/sections/Requirements";
import SafetyCTA from "../../../components/sections/SafetyCTA";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ar.DrvMotoHero.bgImage";
  })[0];

  const drvColumnsImage = images.filter((image) => {
    return image.title === "do.DrvColumns.image";
  });

  const safetyCTAImage = images.filter((image) => {
    return image.title === "ar.SafetyCTA.image";
  })[0];

  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <DrvMotoHero bgImage={drvHeroBgImage}></DrvMotoHero>
      <DrvColumns images={drvColumnsImage.reverse()}></DrvColumns>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <SafetyCTA image={safetyCTAImage}></SafetyCTA>
      <HomeColumns></HomeColumns>
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
            "ar.DrvMotoHero.bgImage"
            "do.DrvColumns.image"
            "ar.SafetyCTA.image"
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
        country: { elemMatch: { code: { eq: "ar" } } }
        name: { eq: "DiDi Moto Argentina" }
      }
    ) {
      nodes {
        contentful_id
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
    contentfulCountry(code: { eq: "ar" }) {
      city {
        name
        slug
      }
    }
  }
`;
