import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiAiportCityHero from "../../components/sections/Airport/DiDiAiportCityHero";
import DiDiAirportDistanceFaqs from "../../components/sections/Airport/DiDiAirportDistanceFaqs";
import DiDiAirportInterstingPoints from "../../components/sections/Airport/DiDiAirportInterstingPoints";

const Airport = ({ data }) => {
  const { name, imageMap } = data.contentfulCity;

  const faqs = data.allContentfulFaq.nodes;

  const faqsInterstingPoints = faqs?.filter(
    (faq) => faq.type[0] === "airportPoints"
  );

  const faqsDistance = faqs?.filter((faq) => faq.type[0] === "airportDistance");

  return (
    <Layout>
      <DiDiAiportCityHero cityName={name} image={imageMap}></DiDiAiportCityHero>
      <DiDiAirportDistanceFaqs
        data={{ faq: faqsDistance }}
        cityName={name}
      ></DiDiAirportDistanceFaqs>
      <DiDiAirportInterstingPoints
        data={{ faq: faqsInterstingPoints }}
        cityName={name}
      ></DiDiAirportInterstingPoints>
    </Layout>
  );
};

export default Airport;

export const query = graphql`
  query ($id: String, $name: String) {
    contentfulCity(id: { eq: $id }) {
      name
      slug
      imageMap {
        gatsbyImageData
      }
      country {
        code
      }
    }
    allContentfulFaq(
      filter: {
        type: { in: ["airportDistance", "airportPoints"] }
        relatedCity: { eq: $name }
      }
    ) {
      nodes {
        title
        type
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              description
              gatsbyImageData
              __typename
            }
          }
        }
      }
    }
  }
`;
