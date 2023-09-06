import React from "react"
import { graphql } from "gatsby";

import VikingHero from "../../../components/sections/Viking/VikingHero"
import Layout from "../../../components/Layout";

const Viking = ({ data }) => {
  const images = data.allContentfulAsset.nodes

  const palImageSteeringWheel = images.filter((image) => {
    return image.title === "mx.pal.frontSteeringWheel";
  })[0];

  const palImageHandbag = images.filter((image) => {
    return image.title === "mx.pal.handbag";
  })[0];

  return (
    <Layout>
      <VikingHero
        imageOne={palImageSteeringWheel}
        imageTwo={palImageHandbag}
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
            "mx.pal.frontSteeringWheel"
            "mx.pal.handbag"
            # "mx.pal.yellowHandbag"
            # "mx.pal.wallet"
            # "mx.pal.frontHandbag"
            # "mx.pal.hat"
            # "mx.pal.card"
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
