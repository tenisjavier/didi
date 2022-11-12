import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PartnerHero from "../../../components/sections/PartnerHero";
import PartnerFeature from "../../../components/sections/PartnerFeature";
import PartnerContent from "../../../components/sections/PartnerContent";
import PartnersGrid from "../../../components/sections/PartnersGrid";
import PartnersCTA from "../../../components/sections/PartnersCTA";

const Partner = ({ data }) => {
  const { heroTitle, heroDesc, heroImage } = data.contentfulPartner;
  const { featureTitle, featureDesc, featureImage } = data.contentfulPartner;
  const { content } = data.contentfulPartner;
  const images = data.allContentfulAsset.nodes;
  const partners = data.allContentfulPartner.nodes;
  const partnerCTAImage = images.filter((image) => {
    return image.title === "co.PartnerCTA.image";
  })[0];
  return (
    <Layout>
      <PartnerHero
        title={heroTitle}
        desc={heroDesc}
        image={heroImage}
      ></PartnerHero>
      <PartnerFeature
        title={featureTitle}
        desc={featureDesc}
        image={featureImage}
      ></PartnerFeature>
      <PartnerContent content={content}></PartnerContent>
      <PartnersGrid data={partners}></PartnersGrid>
      <PartnersCTA image={partnerCTAImage}></PartnersCTA>
    </Layout>
  );
};

export default Partner;

export const query = graphql`query ($id: String, $language: String!) {
  locales: allLocale(filter: {language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  contentfulPartner(id: {eq: $id}) {
    heroTitle
    heroDesc
    heroImage {
      gatsbyImageData
      description
    }
    featureTitle
    featureDesc
    featureImage {
      gatsbyImageData
      description
    }
    content {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          description
          gatsbyImageData(width: 450)
          __typename
        }
      }
    }
  }
  allContentfulPartner(filter: {country: {code: {eq: "co"}}, id: {ne: $id}}) {
    nodes {
      name
      desc
      logo {
        gatsbyImageData
        description
      }
    }
  }
  allContentfulAsset(
    filter: {title: {in: ["co.PartnerCTA.image"]}}
    sort: {title: ASC}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
}`;
