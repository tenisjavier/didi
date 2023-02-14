import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import LegalHero from "../../../components/sections/LegalHero";
import ListSection from "../../../components/ListSection";

const Legal = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const policies = data.allContentfulLegal.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "cl.HomeHero.bgImage";
  })[0];
  const drvPolicies = policies.filter(
    (p) =>
      [
        "Driver Agreement",
        "Driver Software Use and Licence Agreement",
        "Driver Suspension and Disqualification Policy",
        "Driver Anti-Fraud Policy",
        "Driver Complaint Handling Policy",
        "Driver Fatigue Management Policy",
        "General Terms and Conditions for Driver Offers",
        "Fee Schedule",
        "Perth | Fare Increases",
      ].indexOf(p.name) > -1
  );
  const drvProgramPolicies = policies.filter(
    (p) =>
      [
        "Didi Advance Terms",
        "Didi Advance Driver Program",
        "Driver Didi Delivery Rules",
        "Driver Standard Terms for Delivery Services",
      ].indexOf(p.name) > -1
  );
  const paxPolicies = policies.filter(
    (p) =>
      [
        "Passenger Agreement",
        "Rider Anti-Fraud Policy",
        "Rider Complaint Handling Policy ",
        "General Terms and Conditions for Rider Offers",
        "Passenger Software Use and Licence Agreement",
        "DiDi Gift Cards",
      ].indexOf(p.name) > -1
  );
  const paxProgramPolicies = policies.filter(
    (p) =>
      [
        "Rider Didi Delivery Rules",
        "Rider Standard Terms for Delivery Services",
      ].indexOf(p.name) > -1
  );
  const drvPoliciesItems = drvPolicies.map((p) => {
    return {
      text: p.name,
      link: `/au/legal/${p.slug}`,
    };
  });
  const drvProgramPoliciesItems = drvProgramPolicies.map((p) => {
    return {
      text: p.name,
      link: `/au/legal/${p.slug}`,
    };
  });
  const paxPoliciesItems = paxPolicies.map((p) => {
    return {
      text: p.name,
      link: `/au/legal/${p.slug}`,
    };
  });
  const paxProgramPoliciesItems = paxProgramPolicies.map((p) => {
    return {
      text: p.name,
      link: `/au/legal/${p.slug}`,
    };
  });
  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      <ListSection title="Driver" items={drvPoliciesItems}></ListSection>
      <ListSection
        title="Driver Program Specific Terms"
        items={drvProgramPoliciesItems}
      ></ListSection>
      <ListSection title="Rider" items={paxPoliciesItems}></ListSection>
      <ListSection
        title="Rider Program Specific Terms"
        items={paxProgramPoliciesItems}
      ></ListSection>
    </Layout>
  );
};

export default Legal;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["cl.HomeHero.bgImage", "cl.PaxCTA.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulLegal(
      filter: { country: { elemMatch: { code: { eq: "au" } } } }
    ) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
