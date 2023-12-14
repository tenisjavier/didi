import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDelivery from "../../components/sections/HelpCenterFAQDelivery";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HelpCenterFAQTaxi from "../../components/sections/HelpCenterFAQTaxi";
import HomeColumns from "../../components/sections/HomeColumns";
import FaqList from "../../components/sections/FaqList";

const CentroDeAyuda = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "ec.HelpCenterHero.bgImage";
  })[0];
  const faqDelivery = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Entrega Chile"
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
    <Layout schema="faq">
      <HelpCenterHero bgImage={helpCenterBgImage}></HelpCenterHero>
      <HelpCenterFAQDelivery data={faqDelivery[0]}></HelpCenterFAQDelivery>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <HelpCenterFAQPax data={faqPax[0]}></HelpCenterFAQPax>
      <HelpCenterFAQTaxi data={faqTaxi[0]}></HelpCenterFAQTaxi>
      <FaqList
        title={"Más preguntas frecuentes para socios conductores"}
        faqs={faqExpress[0].faq}
      ></FaqList>
      <FaqList
        title={"Más preguntas frecuentes para pasajeros"}
        faqs={faqPax[0].faq}
      ></FaqList>
      <FaqList
        title={"Más preguntas frecuentes para DiDi Delivery"}
        faqs={faqDelivery[0].faq}
      ></FaqList>
      <FaqList
        title={"Más preguntas frecuentes para DiDi Táxi"}
        faqs={faqTaxi[0].faq}
      ></FaqList>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["ec.HelpCenterHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "cl" } } } }
    ) {
      nodes {
        contentful_id
        name
        faq {
          contentful_id
          title
          slug
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

export default CentroDeAyuda;
