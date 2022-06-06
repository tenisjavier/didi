import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faShieldHeart,
  faThumbsUp,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvBenefits from "../../components/sections/DrvBenefits";
import DrvBanner from "../../components/sections/DrvBanner";
import HomeColumns from "../../components/sections/HomeColumns";
import DrvCityList from "../../components/sections/DrvCityList";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faCircleDollarToSlot, faShieldHeart, faThumbsUp, faWallet];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "au.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "au.DrvBenefits.image";
  })[0];
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  const products = data.allContentfulProduct.nodes;
  const cities = data.contentfulCountry.city;

  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvBenefits image={drvBenefitsImage} icons={icons}></DrvBenefits>
      <DrvBanner></DrvBanner>
      <SilderSection data={products}></SilderSection>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
      <DrvCityList data={cities}></DrvCityList>
    </Layout>
  );
};

export default Driver;

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
          regex: "/(au.DrvHero.bgImage)|(au.DrvBenefits.image)|(au.HomeColumns.image)/"
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
    contentfulCountry(code: { eq: "au" }) {
      city {
        name
      }
    }
  }
`;
