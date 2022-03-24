import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DirectionHero from "../../../components/sections/DirectionHero";
import DirectionStepGrid from "../../../components/sections/DirectionStepsGrid";
import Banner from "../../../components/Banner";

const DestinationTemplate = ({ data }) => {
  const bannerData = {
    title: `Pide un DiDi a ${data.contentfulDirection.destination} y llega en ${data.contentfulDirection.carDuration} `,
    desc: `Si te vas en transporte público te tomará ${data.contentfulDirection.duration} en llegar. Viaja rápido, seguro y barato.`,
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnType: "pax",
    btnMode: "light",
  };
  return (
    <Layout>
      <DirectionHero data={data.contentfulDirection}></DirectionHero>
      <Banner data={bannerData}></Banner>
      <DirectionStepGrid data={data.contentfulDirection}></DirectionStepGrid>
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
      carDuration
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
          vehicle_type
        }
      }
    }
  }
`;

export default DestinationTemplate;
