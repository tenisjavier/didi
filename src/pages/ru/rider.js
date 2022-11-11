import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxAltColumns from "../../components/sections/PaxAltColumns";
import PaxTechCTA from "../../components/sections/PaxTechCTA";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "ru.PaxHero.bgImage";
  })[0];
  const paxTechImage = images.filter((image) => {
    return image.title === "ru.PaxTechCTA.image";
  })[0];

  const faqRiderTax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Tariffs Russia"
  );

  const faqRider = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Rider Russia"
  );

  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <PaxTechCTA image={paxTechImage}></PaxTechCTA>
      <PaxAltColumns></PaxAltColumns>
      <HelpCenterFAQPax title="DiDi Тарифы" data={faqRiderTax[0]}></HelpCenterFAQPax>
      <HelpCenterFAQPax title="FAQ для Пассажиров" data={faqRider[0]}></HelpCenterFAQPax>
    </Layout>
  );
};

export default Pasajero;

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
      filter: { title: { in: ["ru.PaxHero.bgImage", "ru.PaxTechCTA.image"] } }
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
        country: { elemMatch: { code: { eq: "ru" } } }
        category: { eq: "pax" }
      }
    ) {
      nodes {
        name
        descriptionForPax
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
        faq {
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
  }
`;
