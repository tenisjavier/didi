import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PlaceHero from "../../../components/sections/PlaceHero";
import PlaceMap from "../../../components/sections/PlaceMap";
import DirectoryOriginList from "../../../components/sections/DirectoryOriginList";

const PlaceTemplate = ({ data }) => {
  return (
    <Layout>
      <PlaceHero data={data.contentfulPlace}></PlaceHero>
      <PlaceMap data={data}></PlaceMap>
      <DirectoryOriginList data={data}></DirectoryOriginList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $address: String) {
    contentfulPlace(id: { eq: $id }) {
      name
      placeId
      country
      address
      image {
        gatsbyImageData(width: 600)
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
