import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import WhyDiDiColumns from "../../components/sections/WhyDiDiColumns";
import DrvTypeCTA from "../../components/sections/DrvTypeCTA";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "ru.DrvHero.bgImage";
  })[0];
  const drvFeaturesImage = images.filter((image) => {
    return image.title === "ru.DrvTypeCTA.image";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Russia"
  );
  const products = data.allContentfulProduct.nodes;
  const productsReq = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Russia"
  );

  return (
    <Layout>
      <DrvHero bgImage={drvHeroBgImage}></DrvHero>
      <WhyDiDiColumns></WhyDiDiColumns>
      <DrvTypeCTA image={drvFeaturesImage}></DrvTypeCTA>
      <SilderSection data={products} title="Для вас есть DiDi"></SilderSection>
      <Requirements data={productsReq}></Requirements>
      <HelpCenterFAQDrv data={faqExpress[0]}></HelpCenterFAQDrv>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["ru.DrvHero.bgImage", "ru.DrvTypeCTA.image"] } }
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
        category: { eq: "driver" }
        name: { ne: "DiDi Fleet Russia" }
      }
    ) {
      nodes {
        name
        description
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
