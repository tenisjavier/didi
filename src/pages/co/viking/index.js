import React from "react"
import { graphql } from "gatsby";

import VikingHero from "../../../components/sections/Viking/VikingHero"
import Layout from "../../../components/Layout";

const Viking = ({ data }) => {
  const images = data.allContentfulAsset.nodes

  const palImageSteeringWheel = images.filter((image) => {
    return image.title === "co.pal.frontSteeringWheel";
  })[0];

  const palImageYellowHandbag = images.filter((image) => {
    return image.title === "co.pal.yellowHandbag";
  })[0];

  return (
    <Layout>
      <VikingHero
        imageOne={palImageSteeringWheel}
        imageTwo={palImageYellowHandbag}
      />
    </Layout>
  )
}

export default Viking

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.pal.yellowHandbag"
            "co.pal.frontSteeringWheel"
            # "co.pal.wallet"
            # "co.pal.frontHandbag"
            # "co.pal.hat"
            # "co.pal.handbag"
            # "co.pal.card"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
