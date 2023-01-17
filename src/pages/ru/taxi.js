import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import WhyTaxiDiDiColumns from "../../components/sections/WhyTaxiDiDiColumns";
import WhyDrvPartnerDiDiColumns from "../../components/sections/WhyDrvPartnerDiDiColumns";
import Requirements from "../../components/sections/Requirements";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "ru.FleetHero.bgImage";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Russia"
  );
  const productsReq = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Russia"
  );

  return (
    <Layout>
      <TaxiHero bgImage={taxiHeroBgImage}></TaxiHero>
      <WhyTaxiDiDiColumns></WhyTaxiDiDiColumns>
      <WhyDrvPartnerDiDiColumns></WhyDrvPartnerDiDiColumns>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <Requirements data={productsReq}></Requirements>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["ru.FleetHero.bgImage"] } }) {
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
        name: { eq: "DiDi Russia" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
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

export default Taxi;
