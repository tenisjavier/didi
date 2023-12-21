import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HelpCenterHeroRTL from "../../components/sections/HelpCenterHeroRTL";
import HelpCenterFAQDrvRTL from "../../components/sections/HelpCenterFAQDrvRTL";
import FaqList from "../../components/sections/FaqList";

const HelpCenter = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "eg.HomeHero.bgImage";
  })[0];
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Egypt"
  );
  return (
    <Layout schema="faq">
      <HelpCenterHeroRTL bgImage={helpCenterBgImage}></HelpCenterHeroRTL>
      <HelpCenterFAQDrvRTL data={faqExpress[0]}></HelpCenterFAQDrvRTL>
      <FaqList
        title={"المزيد من الأسئلة الشائعة للسائقين"}
        faqs={faqExpress[0].faq}
      ></FaqList>
    </Layout>
  );
};

export default HelpCenter;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(eg.HomeHero.bgImage)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: "eg" } } } }
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
