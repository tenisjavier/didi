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
    (node) => node.name === "Delivery"
  );
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "Express"
  );
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "Pasajero"
  );
  const faqTaxi = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "Taxi"
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
  query {
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
