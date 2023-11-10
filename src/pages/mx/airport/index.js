import React from "react";
import { graphql } from "gatsby";

import Layout from "../../../components/Layout";
import DiDiAirportHero from "../../../components/sections/Airport/DiDiAirportHero";
import DiDiAirportCityList from "../../../components/sections/Airport/DiDiAirportCityList";

const Airport = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const AirportHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiAirportHero.bgImage";
  })[0];

  const AirportHeroBgImageMobile = images.filter((image) => {
    return image.title === "mx.DiDiAirportHeroMobile.bgImage";
  })[0];

  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <DiDiAirportHero
        bgImage={AirportHeroBgImage}
        bgImageMobile={AirportHeroBgImageMobile}
      ></DiDiAirportHero>
      <DiDiAirportCityList data={cities}></DiDiAirportCityList>
    </Layout>
  );
};

export default Airport;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiAirportHero.bgImage)|(mx.DiDiAirportHeroMobile.bgImage)|(mx.CreditCardSeguroCTA.image)|(mx.CreditCardMoneyIcon.image)|(mx.CreditCardLockIcon.image)|(mx.CreditCardShieldIcon.image)|(mx.CreditCardNotificationIcon.image)|(mx.CreditCardCTA2.image)|(mx.CreditFaqCard.image)/"
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
    allContentfulCity(
      filter: { hasAirport: { eq: true }, country: { code: { eq: "mx" } } }
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
  }
`;
