import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faShieldHeart,
  faThumbsUp,
  faWallet,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvBenefits from "../../components/sections/DrvBenefits";
import DrvBanner from "../../components/sections/DrvBanner";
import DrvCityList from "../../components/sections/DrvCityList";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";
import DrvColumns from "../../components/sections/DrvColumns";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faCircleDollarToSlot, faShieldHeart, faThumbsUp, faWallet];
  const iconsDrvColumns = [faShieldHeart, faPhoneAlt];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "nz.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "nz.DrvBenefits.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;
  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvBenefits image={drvBenefitsImage} icons={icons}></DrvBenefits>
      <DrvBanner></DrvBanner>
      <SilderSection data={products}></SilderSection>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <DrvCityList data={cities}></DrvCityList>
      <DrvColumns icons={iconsDrvColumns}></DrvColumns>
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { regex: "/(nz.DrvHero.bgImage)|(nz.DrvBenefits.image)/" }
      }
      sort: { title: ASC }
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
        country: { elemMatch: { code: { eq: "nz" } } }
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
      filter: { country: { code: { eq: "nz" } } }
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
    allContentfulPartner(filter: { country: { code: { eq: "nz" } } }) {
      nodes {
        name
        desc
        logo {
          gatsbyImageData
          description
        }
      }
    }
    allContentfulRequirement(filter: { country: { code: { eq: "nz" } } }) {
      nodes {
        name
        slug
        image {
          gatsbyImageData
          description
        }
      }
    }
  }
`;
