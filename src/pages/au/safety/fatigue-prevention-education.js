import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrivePreventionHero from "../../../components/sections/DrivePreventionHero";
import TextContent from "../../../components/sections/TextContent";
import DrvPreventionFeatureBanner from "../../../components/sections/DrvPreventionFeatureBanner";
import FatiguePreventionFAQ from "../../../components/sections/FatiguePreventionFAQ";

const RiderSafety = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const drvPreventionCTA = faqs.filter((faq) => {
    return faq.title === "How fatigue affects your driving";
  })[0];
  const drvSafetyOnboardingCTA = faqs.filter((faq) => {
    return faq.title === "Driver Safety Onboarding Training";
  })[0];
  const drivePreventionHeroBgImage = images.filter((image) => {
    return image.title === "au.DrivePreventionHero.bgImage";
  })[0];
  const faqFatiguePrevention = faqs.filter((faq) => {
    return (
      faq.title === "What counts towards the 13-hour online time limit?" ||
      faq.title === "When will the 13 hours of online time reset?" ||
      faq.title === "How do I know how many hours I have been online?" ||
      faq.title === "How do I know when I can go back online?" ||
      faq.title ===
        "How is the refresh time calculated if I go online and offline at irregular times?" ||
      faq.title === "Will my app reset after a 24-hour period?"
    );
  });

  return (
    <Layout>
      <DrivePreventionHero
        bgImage={drivePreventionHeroBgImage}
      ></DrivePreventionHero>
      <TextContent
        title={drvPreventionCTA.title}
        data={drvPreventionCTA.content}
      ></TextContent>
      <DrvPreventionFeatureBanner></DrvPreventionFeatureBanner>
      <FatiguePreventionFAQ data={faqFatiguePrevention}></FatiguePreventionFAQ>
      <TextContent
        title={drvPreventionCTA.title}
        data={drvSafetyOnboardingCTA.content}
      ></TextContent>
    </Layout>
  );
};

export default RiderSafety;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(au.DrivePreventionHero.bgImage)/" } }
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
`;
