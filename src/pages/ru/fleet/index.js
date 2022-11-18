import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FleetHero from "../../../components/sections/FleetHero";
import FleetOwnerColumns from "../../../components/sections/FleetOwnerColumns";
import HelpCenterFAQFleet from "../../../components/sections/HelpCenterFAQFleet";

const DiDiFleet = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const FleetHeroBgImage = images.filter((image) => {
    return image.title === "ru.TaxiHero.bgImage";
  })[0];

  return (
    <Layout>
      <FleetHero bgImage={FleetHeroBgImage}></FleetHero>
      <FleetOwnerColumns></FleetOwnerColumns>
      <HelpCenterFAQFleet
        data={faqs.reverse()}
        title={"Общие вопросы"}
      ></HelpCenterFAQFleet>
    </Layout>
  );
};

export default DiDiFleet;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["ru.TaxiHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(
      filter: { product: { elemMatch: { name: { eq: "DiDi Fleet Russia" } } } }
    ) {
      nodes {
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
`;
