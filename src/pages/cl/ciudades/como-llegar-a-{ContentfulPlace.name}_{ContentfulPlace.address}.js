import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import PlaceHero from "../../../components/sections/PlaceHero";
import PlaceMap from "../../../components/sections/PlaceMap";
import DirectoryOriginList from "../../../components/sections/DirectoryOriginList";
import CTASection from "../../../components/CTASection";
import { StaticImage } from "gatsby-plugin-image";
const PlaceTemplate = ({ data }) => {
  const wikiImage = <StaticImage 
        src={`../../../images/wiki-logo.png`}
        alt="Wiki logo"
        className=""
        width={300}/>
  return (
    <Layout>
      <PlaceHero data={data.contentfulPlace}></PlaceHero>
      <CTASection 
      bgColor={"bg-gray-100"}
      textColor={'text-gray-800'}
      title={"Sobre el Lugar:"}
      desc={data.contentfulPlace.description.description}
      image={wikiImage}
      desImage={'Fuente: Wikipedia'}
      reverse={true}/>
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
