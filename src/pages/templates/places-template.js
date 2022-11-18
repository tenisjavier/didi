import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PlaceHero from "../../components/sections/PlaceHero";
import PlaceMap from "../../components/sections/PlaceMap";
import DirectoryOriginList from "../../components/sections/DirectoryOriginList";
import WikiDescription from "../../components/sections/WikiDescription";

const PlaceTemplate = ({ data }) => {
  const name = data.contentfulPlace.name;
  const city = data.contentfulPlace.city.name;
  const address = data.contentfulPlace.address;
  return (
    <Layout
      title={`¿Cómo llegar a ${name} en ${city}?`}
      desc={`Aprende como llegar a ${name} en ${city} desde distintos puntos de la ciudad. Viaja a ${address} `}
    >
      <PlaceHero data={data.contentfulPlace}></PlaceHero>
      <PlaceMap data={data}></PlaceMap>
      <WikiDescription data={data.contentfulPlace}></WikiDescription>
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
      city {
        name
      }
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
