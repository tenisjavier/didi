import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PlaceHero from "../../../components/sections/PlaceHero";
import PlaceMap from "../../../components/sections/PlaceMap";
import DirectoryOriginList from "../../../components/sections/DirectoryOriginList";
import WikiDescription from "../../../components/sections/WikiDescription";

const PlaceTemplate = ({ data }) => {
  return (
    <Layout>
      <PlaceHero data={data.contentfulPlace}></PlaceHero>
      <PlaceMap data={data}></PlaceMap>
      <WikiDescription data={data.contentfulPlace}></WikiDescription>
      <DirectoryOriginList data={data}></DirectoryOriginList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $address: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulPlace(id: { eq: $id }) {
      name
      placeId
      country
      address
      description {
        description
      }
      image {
        gatsbyImageData(width: 900)
      }
      geometry {
        lat
        lon
      }
    }
    allContentfulDirection(filter: { destinationAddress: { eq: $address } }) {
      nodes {
        destinationId
        destination
        destinationAddress
        originId
        origin
        originAddress
        distance
        duration
        mode
        lastLine
        steps {
          distance
          duration
          instruction
          mode
          name
          transit {
            arrival
            departure
            line_color
            line_name
            line_short_name
          }
        }
      }
    }
  }
`;

export default PlaceTemplate;
