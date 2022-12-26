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
    <Layout>
      <BecomeDriverHero bgImage={becomeDriverHeroBgImage}></BecomeDriverHero>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe-QROQmagcMMRvYvhqpKKLof_7leNMzxMwJZzjptA-A8jlBw/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className="w-full h-96"
      >
        Loading…
      </iframe>
      <BecomeDriverCTA image={becomeDriverCTABgImage}></BecomeDriverCTA>
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
