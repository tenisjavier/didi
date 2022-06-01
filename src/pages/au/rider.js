import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import SilderSection from "../../components/sections/SliderSection";
import PaxBenefits from "../../components/sections/PaxBenefits";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "au.PaxHero.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "au.PaxWhyDiDi.image";
  })[0];

  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <PaxBenefits image={paxWhyDiDiImage}></PaxBenefits>
      <PaxBanner></PaxBanner>
      <SilderSection data={products}></SilderSection>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default Pasajero;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.PaxHero.bgImage)|(au.PaxWhyDiDi.image)|(au.HomeColumns.image)/"
        }
      }
      sort: { fields: title }
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
        country: { elemMatch: { code: { eq: "au" } } }
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
  }
`;
