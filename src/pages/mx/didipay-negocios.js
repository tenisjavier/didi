import React from "react";
import { graphql } from "gatsby";
import { faMoneyBillTransfer, faCode } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DiDiPayEnterpriseHero from "../../components/sections/DiDiPayEnterpriseHero";
import DiDiPayEnterpriseWhy from "../../components/sections/DiDiPayEnterpriseWhy";
import DiDiPayEnterpriseFeatures from "../../components/sections/DiDiPayEnterpriseFeatures";
import DiDiPayEnterpriseColumns from "../../components/sections/DiDiPayEnterpriseColumns";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";

const DiDiPayEnterprise = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faMoneyBillTransfer, faCode];
  const homeHeroImage = images.filter((image) => {
    return image.title === "mx.DiDiPayEnterpriseHero.image";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayEnterpriseHero.bgImage";
  })[0];
  const whyDiDiImage = images.filter((image) => {
    return image.title === "mx.WhyDiDiPayEnterprise.image";
  })[0];
  const featuresImage = images.filter((image) => {
    return image.title === "mx.FeaturesPayEnterprise.image";
  })[0];
  //
  return (
    <Layout>
      <DiDiPayEnterpriseHero
        bgImage={homeHeroBgImage}
        image={homeHeroImage}
      ></DiDiPayEnterpriseHero>
      <DiDiPayEnterpriseFeatures
        image={featuresImage}
      ></DiDiPayEnterpriseFeatures>
      <DiDiPayEnterpriseWhy image={whyDiDiImage}></DiDiPayEnterpriseWhy>
      <DiDiPayEnterpriseColumns icons={icons}></DiDiPayEnterpriseColumns>
      <DiDiPayColumns></DiDiPayColumns>
    </Layout>
  );
};

export default DiDiPayEnterprise;

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
          regex: "/(mx.DiDiPayEnterpriseHero.bgImage)|(mx.DiDiPayEnterpriseHero.image)|(mx.WhyDiDiPayEnterprise.image)|(mx.FeaturesPayEnterprise.image)|(mx.DiDiPayColumns.image)/"
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
  }
`;