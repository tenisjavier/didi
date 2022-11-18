import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import CareerHero from "../../components/sections/CareerHero";
import CareerFeatures from "../../components/sections/CareerFeatures";
import CareerColumns from "../../components/sections/CareerColumns";
import CareerBanner from "../../components/sections/CareerBanner";
import CareerWhyDiDi from "../../components/sections/CareerWhyDiDi";
import CareerFAQ from "../../components/sections/CareerFAQ";

const Career = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "au.CareerHero.bgImage";
  })[0];
  const careerWhyDiDiImage = images.filter((image) => {
    return image.title === "au.CareerWhyDiDi.image";
  })[0];

  const careerColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.CareerColumns.image") !== -1;
  });
  const faqCareer = data.allContentfulFaq.nodes.filter((node) => {
    let exp =
      /How would you describe the DiDi work culture|Can I apply for more than one position at DiDi|Does DiDi offer internships|How many countries does DiDi operate in|How long does DiDi's recruitment process usually take/;
    return exp.test(node.title);
  });
  return (
    <Layout>
      <CareerHero bgImage={paxHeroBgImage}></CareerHero>
      <CareerFeatures image={careerWhyDiDiImage}></CareerFeatures>
      <CareerColumns images={careerColumnsImages}></CareerColumns>
      <CareerBanner></CareerBanner>
      <CareerWhyDiDi image={careerWhyDiDiImage}></CareerWhyDiDi>
      <CareerFAQ data={faqCareer}></CareerFAQ>
    </Layout>
  );
};

export default Career;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.CareerHero.bgImage)|(au.CareerWhyDiDi.image)|(au.CareerColumns.image)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(filter: { country: { code: { eq: "au" } } }) {
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
