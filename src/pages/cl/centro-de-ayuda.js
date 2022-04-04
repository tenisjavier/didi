import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDelivery from "../../components/sections/HelpCenterFAQDelivery";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HelpCenterFAQTaxi from "../../components/sections/HelpCenterFAQTaxi";
import HomeColumns from "../../components/sections/HomeColumns";

const CentroDeAyuda = ({ data }) => {
  const faqDelivery = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Chile"
  );
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Chile"
  );
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Pasajero Chile"
  );
  const faqTaxi = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Taxi Chile"
  );
  return (
    <Layout>
      <HelpCenterHero></HelpCenterHero>
      <HelpCenterFAQDelivery data={faqDelivery[0]}></HelpCenterFAQDelivery>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
      <HelpCenterFAQTaxi data={faqTaxi[0]}></HelpCenterFAQTaxi>

      <HomeColumns></HomeColumns>
    </Layout>
  );
};

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
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "cl" } } } }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
          }
        }
      }
    }
  }
`;

export default CentroDeAyuda;
