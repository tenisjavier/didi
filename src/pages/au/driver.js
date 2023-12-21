import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faShieldHeart,
  faThumbsUp,
  faWallet,
  faHandshakeSimple,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvBenefits from "../../components/sections/DrvBenefits";
import PartnersCTA from "../../components/sections/PartnersCTA";
import PartnersGrid from "../../components/sections/PartnersGrid";
import DrvBanner from "../../components/sections/DrvBanner";
import HomeColumns from "../../components/sections/HomeColumns";
import DrvCityList from "../../components/sections/DrvCityList";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";
import DrvColumns from "../../components/sections/DrvColumns";
import RequirementsLinks from "../../components/sections/RequirementsLinks";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const icons = [faCircleDollarToSlot, faShieldHeart, faThumbsUp, faWallet];
  const iconsDrvColumns = [faHandshakeSimple, faShieldHeart, faPhoneAlt];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "au.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "au.DrvBenefits.image";
  })[0];
  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  const partnerCTAImage = images.filter((image) => {
    return image.title === "au.PartnerCTA.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;
  const requirements = data.allContentfulRequirement.nodes;
  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvBenefits image={drvBenefitsImage} icons={icons}></DrvBenefits>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
      <PartnersGrid data={partners}></PartnersGrid>
      <DrvBanner></DrvBanner>
      <SilderSection data={products}></SilderSection>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
      <DrvCityList data={cities}></DrvCityList>
      <RequirementsLinks requirements={requirements}></RequirementsLinks>
      <DrvColumns icons={iconsDrvColumns}></DrvColumns>
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.DrvHero.bgImage)|(au.DrvBenefits.image)|(au.HomeColumns.image)|(au.HomeColumns.image)|(au.PartnerCTA.image)/"
        }
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
        country: { elemMatch: { code: { eq: "au" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        contentful_id
        name
        description
        phone
        requirement {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              description
              gatsbyImageData(width: 800)
              __typename
            }
          }
        }
        image {
          gatsbyImageData
          title
        }
        country {
          code
        }
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: "au" } } }
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
    allContentfulPartner(filter: { country: { code: { eq: "au" } } }) {
      nodes {
        name
        slug
        desc
        logo {
          gatsbyImageData
          description
        }
      }
    }
    allContentfulRequirement(filter: { country: { code: { eq: "au" } } }) {
      nodes {
        name
        slug
        image {
          gatsbyImageData
          description
          title
        }
      }
    }
  }
`;
