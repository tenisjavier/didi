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
  const drvPolicies = policies.filter((p) => {
    return (
      p.name === "Driver Agreement" ||
      p.name === "Driver Software Use and Licence Agreement" ||
      p.name === "Driver Suspension and Disqualification Policy" ||
      p.name === "Driver Anti-Fraud Policy" ||
      p.name === "Driver Complaint Handling Policy" ||
      p.name === "Driver Fatigue Management Policy" ||
      p.name === "General Terms and Conditions for Driver Offers" ||
      p.name === "Fee Schedule" ||
      p.name === "Community Guidelines"
    );
  });

  const drvProgramPolicies = policies.filter((p) => {
    return (
      p.name === "Didi Advance Terms" ||
      p.name === "Didi Advance Driver Program" ||
      p.name === "Driver Didi Delivery Rules" ||
      p.name === "Driver Standard Terms for Delivery Services"
    );
  });
  const paxPolicies = policies.filter((p) => {
    return (
      p.name === "Passenger Agreement" ||
      p.name === "Rider Anti-Fraud Policy" ||
      p.name === "Rider Complaint Handling Policy " ||
      p.name === "General Terms and Conditions for Rider Offers" ||
      p.name === "Passenger Software Use and Licence Agreement" ||
      p.name === "NZ Promo Terms and Conditions" ||
      p.name === "DiDi Gift Cards"
    );
  });
  const paxProgramPolicies = policies.filter(
    (p) =>
      p.name === "Rider Didi Delivery Rules" ||
      p.name === "Rider Standard Terms for Delivery Services"
  );

  const privacyPolicies = policies.filter(
    (p) =>
      [
        "Privacy Policy"
      ].indexOf(p.name) > -1
  );

  const drvPoliciesItems = drvPolicies.map((p) => {
    return {
      text: p.name,
      link: p.slug,
    };
  });
  const drvProgramPoliciesItems = drvProgramPolicies.map((p) => {
    return {
      text: p.name,
      link: p.slug,
    };
  });
  const paxPoliciesItems = paxPolicies.map((p) => {
    return {
      text: p.name,
      link: p.slug,
    };
  });
  const paxProgramPoliciesItems = paxProgramPolicies.map((p) => {
    return {
      text: p.name,
      link: p.slug,
    };
  });
  const privacyPoliciesItems = privacyPolicies.map((p) => {
    return {
      text: p.name,
      link: `/nz/legal/${p.slug}`,
    };
  });
  privacyPoliciesItems.push(
    {
      text: "Privacy Center",
      link: `https://privacy-center.didiglobal.com/NZ/home`
    }
  )
  return (
    <Layout>
      <LegalHero bgImage={homeHeroBgImage}></LegalHero>
      <ListSection title="Driver" items={drvPoliciesItems}></ListSection>
      <ListSection title="Driver Program Specific Terms" items={drvProgramPoliciesItems}></ListSection>
      <ListSection title="Rider" items={paxPoliciesItems}></ListSection>
      <ListSection title="Rider Program Specific Terms" items={paxProgramPoliciesItems}></ListSection>
      <ListSection title="Privacy" items={privacyPoliciesItems}></ListSection>
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
      filter: { country: { elemMatch: { code: { eq: "nz" } } } }
    ) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
