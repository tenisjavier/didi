import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import CareerHero from "../../components/sections/CareerHero";
import CareerFeatures from "../../components/sections/CareerFeatures";
import CareerColumns from "../../components/sections/CareerColumns";
import CareerBanner from "../../components/sections/CareerBanner";
import CareerWhyDiDi from "../../components/sections/CareerWhyDiDi";

const Career = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "nz.CareerHero.bgImage";
  })[0];
  const careerWhyDiDiImage = images.filter((image) => {
    return image.title === "nz.CareerWhyDiDi.image";
  })[0];

  const careerColumnsImages = images.filter((image) => {
    return image.title.indexOf("nz.CareerColumns.image") !== -1;
  });

  return (
    <Layout>
      <CareerHero bgImage={paxHeroBgImage}></CareerHero>
      <CareerFeatures image={careerWhyDiDiImage}></CareerFeatures>
      <CareerColumns images={careerColumnsImages}></CareerColumns>
      <CareerBanner></CareerBanner>
      <CareerWhyDiDi image={careerWhyDiDiImage}></CareerWhyDiDi>
    </Layout>
  );
};

export default Career;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(nz.CareerHero.bgImage)|(nz.CareerWhyDiDi.image)|(nz.CareerColumns.image)/"
        }
      }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(filter: { country: { code: { eq: "nz" } } }) {
      nodes {
        id
        title
        content {
          raw
        }
      }
    }
  }
`;
