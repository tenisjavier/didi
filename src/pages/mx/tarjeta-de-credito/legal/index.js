import React from "react";
import { graphql } from "gatsby";

import Layout from "../../../../components/Layout";
import DiDiCreditLegalHero from "../../../../components/sections/CreditCard/DiDiCreditLegalHero";
import LegalContent from "../../../../components/sections/LegalContent";

const DiDiCredit = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cardHeroBgImage = images.filter((image) => {
    return image.title === "mx.CreditCardHero.image";
  })[0];

  const content = data.contentfulLegal.content;

  return (
    <Layout>
      <DiDiCreditLegalHero image={cardHeroBgImage}></DiDiCreditLegalHero>
      <LegalContent content={content}></LegalContent>
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
    contentfulLegal(name: { eq: "Legal México Tarjeta de Credito" }) {
      name
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;
