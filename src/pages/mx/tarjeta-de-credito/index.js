import React from "react";
import { graphql } from "gatsby";

import Layout from "../../../components/Layout";
import DiDiCreditHero from "../../../components/sections/CreditCard/DiDiCreditHero";
import DiDiCreditBanner from "../../../components/sections/CreditCard/DiDiCreditBanner";
import DiDiCreditFeatures from "../../../components/sections/CreditCard/DiDiCreditFeatures";
import DiDiCreditBannerBenefits from "../../../components/sections/CreditCard/DiDiCreditBannerBenefits";
import DiDiCreditBenefits from "../../../components/sections/CreditCard/DiDiCreditBenefits";
import DiDiCreditRequirements from "../../../components/sections/CreditCard/DiDiCreditRequirements";
import DiDiCreditWhy from "../../../components/sections/CreditCard/DiDiCreditWhy";
import DiDiCreditFAQ from "../../../components/sections/CreditCard/DiDiCreditFAQ";
import DiDiCreditCachBack from "../../../components/sections/CreditCard/DiDiCreditCashBack";
const DiDiCredit = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const cardHeroBgImage = images.filter((image) => {
    return image.title === "mx.CreditCardHero.image";
  })[0];
  const cardFeaturesImage = images.filter((image) => {
    return image.title === "mx.CreditCardCTA.image";
  })[0];
  const cardBenefitsImage = images.filter((image) => {
    return image.title === "mx.CreditCardSeguroCTA.image";
  })[0];
  const iconCard = images.filter((image) => {
    return image.title === "mx.CreditCardMoneyIcon.image";
  })[0];
  const iconSms = images.filter((image) => {
    return image.title === "mx.CreditCardNotificationIcon.image";
  })[0];
  const iconLock = images.filter((image) => {
    return image.title === "mx.CreditCardLockIcon.image";
  })[0];
  const iconShield = images.filter((image) => {
    return image.title === "mx.CreditCardShieldIcon.image";
  })[0];
  const icons = [iconCard, iconSms, iconLock, iconShield];

  const cardRequirementsImage = images.filter((image) => {
    return image.title === "mx.CreditCardCTA2.image";
  })[0];
  const cardWhyImage = images.filter((image) => {
    return image.title === "mx.CreditFaqCard.image";
  })[0];
  return (
    <Layout sb={false} index={false}>
      <DiDiCreditHero image={cardHeroBgImage}></DiDiCreditHero>
      <DiDiCreditBanner></DiDiCreditBanner>
      <DiDiCreditFeatures image={cardFeaturesImage}></DiDiCreditFeatures>
      {/* <DiDiCreditColumns></DiDiCreditColumns> */}
      <DiDiCreditCachBack></DiDiCreditCachBack>
      <DiDiCreditBannerBenefits></DiDiCreditBannerBenefits>
      <DiDiCreditBenefits
        images={icons}
        image={cardBenefitsImage}
      ></DiDiCreditBenefits>
      <DiDiCreditRequirements
        image={cardRequirementsImage}
      ></DiDiCreditRequirements>
      <DiDiCreditWhy image={cardWhyImage}></DiDiCreditWhy>
      <DiDiCreditFAQ data={faqs}></DiDiCreditFAQ>
    </Layout>
  );
};

export default DiDiCredit;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.CreditCardHero.image)|(mx.CreditCardCTA.image)|(mx.CreditCardSeguroCTA.image)|(mx.CreditCardMoneyIcon.image)|(mx.CreditCardLockIcon.image)|(mx.CreditCardShieldIcon.image)|(mx.CreditCardNotificationIcon.image)|(mx.CreditCardCTA2.image)|(mx.CreditFaqCard.image)/"
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
    allContentfulFaq(
      filter: { country: { code: { eq: "mx" } }, type: { eq: "card" } }
    ) {
      nodes {
        slug
        title
        content {
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
      }
    }
  }
`;
