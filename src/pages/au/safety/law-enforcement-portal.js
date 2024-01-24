import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LawEnforcementHero from "../../../components/sections/LawEnforcementHero";
import LawEnforcementFAQ from "../../../components/sections/LawEnforcementFAQ";
import LawEnforcementBannerOne from "../../../components/sections/LawEnforcementBannerOne";
import LawEnforcementBannerTwo from "../../../components/sections/LawEnforcementBannerTwo";
import LawEnforcementBannerThree from "../../../components/sections/LawEnforcementBannerThree";
import LawEnforcementColumns from "../../../components/sections/LawEnforcementColumns";
import LawEnforcementBannerSix from "../../../components/sections/LawEnforcementBannerSix";
import LawEnforcementRequestColumns from "../../../components/sections/LawEnforcementRequestColumns";


const LawEnforcement = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const driveLawEnforcementHeroBgImage = images.filter((image) => {
    return image.title === "au.safety.lawenforcement.hero";
  })[0];
  const faqLawEnforcement = faqs.filter((faq) => {
    return (
      faq.title === "How do I obtain more assertive and agile answers?" ||
      faq.title === "What to do in emergency cases? And what are emergency cases?" ||
      faq.title === "What is the average response time?" ||
      faq.title === "How long can the authority access information on the portal for?" ||
      faq.title === "Who can I contact if I have questions?" ||
      faq.title === "What are the terms and conditions for using the platform?" ||
      faq.title === "Which email and phone number should be provided for portal registration?" ||
      faq.title === "Is it possible to request data preservation of any account?" ||
      faq.title === "What should the authority do in case of losing/forgetting their password?"
    );
  });

  return (
    <Layout>
      <LawEnforcementHero
        bgImage={driveLawEnforcementHeroBgImage}
      ></LawEnforcementHero>
      <LawEnforcementBannerOne></LawEnforcementBannerOne>
      <LawEnforcementBannerTwo></LawEnforcementBannerTwo>
      <LawEnforcementRequestColumns></LawEnforcementRequestColumns>
      <LawEnforcementColumns></LawEnforcementColumns>
      <LawEnforcementBannerSix></LawEnforcementBannerSix>
      <LawEnforcementFAQ data={faqLawEnforcement}></LawEnforcementFAQ>
    </Layout>
  );
};

export default LawEnforcement;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(au.safety.lawenforcement.hero)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(filter: { country: { code: { eq: "au" } } }) {
      nodes {
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
`;
