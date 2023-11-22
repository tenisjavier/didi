import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiAiportCityHero from "../../components/sections/Airport/DiDiAiportCityHero";
import DiDiAirportDistanceFaqs from "../../components/sections/Airport/DiDiAirportDistanceFaqs";
import DiDiAirportInterstingPoints from "../../components/sections/Airport/DiDiAirportInterstingPoints";

const Airport = ({ data }) => {
  const { name, imageMap, product } = data.contentfulCity;

  const productInterstingPoints = product.find(
    (item) => item.name === "DiDi Airport Interest Point MX"
  );

  const productDistance = product.find(
    (item) => item.name === "DiDi Airport Distance MX"
  );

  const faqsInterstingPoints = productInterstingPoints.faq
    .filter((item) => item.relatedCity === name)
    .reverse();

  const faqsDistance = productDistance?.faq
    .filter((item) => item.relatedCity === name)
    .reverse();

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
  query ($id: String) {
    contentfulCity(id: { eq: $id }) {
      name
      slug
      imageMap {
        gatsbyImageData
      }
      product {
        name
        description
        faq {
          relatedCity
          title
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
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
      country {
        code
      }
    }
  }
`;
