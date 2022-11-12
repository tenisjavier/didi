import React from "react";
import { graphql } from "gatsby";
import {
  faMoneyBillTransfer,
  faThumbsUp,
  faShieldHeart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/Layout";
import DrvHero from "../../../components/sections/DrvHero";
import DrvBenefits from "../../../components/sections/DrvBenefits";
import DrvBanner from "../../../components/sections/DrvBanner";
import DrvCityList from "../../../components/sections/DrvCityList";
import SilderSection from "../../../components/sections/SliderSection";
import Requirements from "../../../components/sections/Requirements";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";
import VideoSection from "../../../components/sections/VideoSection";
import ClubDiDiCTA from "../../../components/sections/ClubDiDiCTA";
import WomenDiDiCTA from "../../../components/sections/WomenDiDiCTA";

const Conductor = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faMoneyBillTransfer, faThumbsUp, faShieldHeart, faWallet];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "mx.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "mx.DrvBenefits.image";
  })[0];
  const clubDiDiBgImage = images.filter((image) => {
    return image.title === "mx.ClubDiDiCTA.bgImage";
  })[0];
  const aboutWomenDrvImage = images.filter((image) => {
    return image.title === "mx.WomenDiDiCTA.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <DrvBenefits image={drvBenefitsImage} icons={icons}></DrvBenefits>
      <DrvBanner></DrvBanner>
      <SilderSection
        data={products}
        title="Hay un DiDi para ti"
      ></SilderSection>
      <VideoSection></VideoSection>
      <Requirements data={products}></Requirements>
      <ClubDiDiCTA bgImage={clubDiDiBgImage}></ClubDiDiCTA>
      <WomenDiDiCTA image={aboutWomenDrvImage}></WomenDiDiCTA>
      <DrvCityList data={cities}></DrvCityList>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default Conductor;

export const query = graphql`query ($language: String!) {
  locales: allLocale(
    filter: {ns: {in: ["translation"]}, language: {eq: $language}}
  ) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  allContentfulAsset(
    filter: {title: {in: ["mx.DrvHero.bgImage", "mx.ClubDiDiCTA.bgImage", "mx.WomenDiDiCTA.image", "mx.DrvBenefits.image"]}}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulProduct(
    filter: {country: {elemMatch: {code: {eq: "mx"}}}, category: {eq: "driver"}}
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
  allContentfulCity(filter: {country: {code: {eq: "mx"}}}, sort: {name: ASC}) {
    nodes {
      name
      slug
      image {
        gatsbyImageData(width: 400)
        description
      }
    }
  }
}`;
