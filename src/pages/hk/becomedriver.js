import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import BecomeDriverHero from "../../components/sections/BecomeDriverHero";
import BecomeDriverCTA from "../../components/sections/BecomeDriverCTA";
import BecomeDriverColumns from "../../components/sections/BecomeDriverColumns";

const BecomeDriver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const becomeDriverHeroBgImage = images.filter((image) => {
    return image.title === "hk.BecomeDriverHero.bgImage";
  })[0];
  const becomeDriverCTABgImage = images.filter((image) => {
    return image.title === "hk.BecomeDriverCTA.bgImage";
  })[0];
  const becomeDriverColumnsImages = images.filter((image) => {
    return image.title.indexOf("hk.BecomeDriverColumns.image") !== -1;
  });

  return (
    <Layout sb={false}>
      <BecomeDriverHero bgImage={becomeDriverHeroBgImage}></BecomeDriverHero>
      <BecomeDriverCTA bgImage={becomeDriverCTABgImage}></BecomeDriverCTA>
      <BecomeDriverColumns
        images={becomeDriverColumnsImages}
      ></BecomeDriverColumns>
    </Layout>
  );
};

export default BecomeDriver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(hk.BecomeDriverCTA.bgImage)|(hk.BecomeDriverColumns.image)|(hk.BecomeDriverHero.bgImage)/"
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
