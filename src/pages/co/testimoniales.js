import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TestimonialsHero from "../../components/sections/TestimonialsHero";
import DrvVideoGrid from "../../components/sections/DrvVideoGrid";
import DrvBanner from "../../components/sections/DrvBanner";
import HomeColumns from "../../components/sections/PaxColumns";

const Testimonials = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const testimonialsHeroBgImage = images.filter((image) => {
    return image.title === "co.TestimonialsHero.bgImage";
  })[0];

  return (
    <Layout>
      <TestimonialsHero bgImage={testimonialsHeroBgImage}></TestimonialsHero>
      <DrvVideoGrid></DrvVideoGrid>
      <DrvBanner></DrvBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Testimonials;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["co.TestimonialsHero.bgImage"] } }
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
