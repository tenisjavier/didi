import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DirectionHero from "../../../components/sections/DirectionHero";
import DirectionStepGrid from "../../../components/sections/DirectionStepsGrid";

const PlaceTemplate = (props) => {
  console.log(props);
  return (
    <Layout>
      <DirectionHero data={props.data.contentfulDirection}></DirectionHero>
      <DirectionStepGrid
        data={props.data.contentfulDirection}
      ></DirectionStepGrid>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulDirection(id: { eq: $id }) {
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
`;

export default PlaceTemplate;
