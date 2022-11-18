import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import OfferHero from "../../../components/sections/OfferHero";
import OfferColumns from "../../../components/sections/OfferColumns";
import OfferFeatures from "../../../components/sections/OfferFeatures";

const Partner = ({ data }) => {
  const {
    heroTitle,
    heroDesc,
    heroImage,
    featureTitle,
    featureDesc,
    featureImage,
  } = data.contentfulOffer;
  const offer = data.contentfulOffer;
  const columns = [
    {
      title: offer.column1Title,
      desc: offer.column1Desc,
      image: offer.column1Image,
    },
    {
      title: offer.column2Title,
      desc: offer.column2Desc,
      image: offer.column2Image,
    },
    {
      title: offer.column3Title,
      desc: offer.column3Desc,
      image: offer.column3Image,
    },
  ];
  return (
    <Layout>
      <OfferHero
        title={heroTitle}
        desc={heroDesc}
        image={heroImage}
      ></OfferHero>
      {offer.column1Title && <OfferColumns columns={columns}></OfferColumns>}
      <OfferFeatures
        title={featureTitle}
        desc={featureDesc}
        image={featureImage}
      ></OfferFeatures>
    </Layout>
  );
};

export default Partner;

export const query = graphql`
  query ($id: String) {
    contentfulOffer(id: { eq: $id }) {
      heroTitle
      heroDesc
      heroImage {
        gatsbyImageData
        description
      }
      column1Title
      column1Desc
      column1Image {
        gatsbyImageData
        description
      }
      column2Title
      column2Desc
      column2Image {
        gatsbyImageData
        description
      }
      column3Title
      column3Desc
      column3Image {
        gatsbyImageData
        description
      }
      featureTitle
      featureDesc
      featureImage {
        gatsbyImageData
        description
      }
    }
    allContentfulAsset(
      filter: { title: { in: ["au.PartnerCTA.image"] } }
      sort: { title: ASC }
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
