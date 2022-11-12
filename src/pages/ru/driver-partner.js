import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvPartnerHero from "../../components/sections/DrvPartnerHero";
import DrvPartnerColumns from "../../components/sections/DrvPartnerColumns";
import DrvPartnerRegisterCTA from "../../components/sections/DrvPartnerRegisterCTA";
import DrvPartnerDownloadCTA from "../../components/sections/DrvPartnerDownloadCTA";
import DrvPartnerLoginCTA from "../../components/sections/DrvPartnerLoginCTA";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ru.DriverPartnerHero.bgImage";
  })[0];
  return (
    <Layout>
      <DrvPartnerHero bgImage={drvHeroBgImage}></DrvPartnerHero>
      <DrvPartnerColumns></DrvPartnerColumns>
      <DrvPartnerRegisterCTA></DrvPartnerRegisterCTA>
      <DrvPartnerDownloadCTA></DrvPartnerDownloadCTA>
      <DrvPartnerLoginCTA></DrvPartnerLoginCTA>
    </Layout>
  );
};

export default Driver;

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
  allContentfulAsset(filter: {title: {in: ["ru.DriverPartnerHero.bgImage"]}}) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulProduct(
    filter: {country: {elemMatch: {code: {eq: "cl"}}}, category: {eq: "driver"}}
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
  allContentfulCity(filter: {country: {code: {eq: "cl"}}}, sort: {name: ASC}) {
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
