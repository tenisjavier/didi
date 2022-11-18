import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiPayHero from "../../components/sections/DiDiPayHero";
import DiDiPayWhyDiDi from "../../components/sections/DiDiPayWhyDiDi";
import DiDiPayFeatures from "../../components/sections/DiDiPayFeatures";
import DiDiPayGrid from "../../components/sections/DiDiPayGrid";
import DiDiPaySilderSection from "../../components/sections/DiDiPaySliderSection";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";

const DiDiPay = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroImage = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.image";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.bgImage";
  })[0];
  const whyDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayWhyDiDi.image";
  })[0];
  const featuresImage = images.filter((image) => {
    return image.title === "mx.DiDiPayFeatures.image";
  })[0];
  const sliderImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPaySlider.image") !== -1;
  });
  const columnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayColumns.image") !== -1;
  });

  return (
    <Layout>
      <DiDiPayHero
        bgImage={homeHeroBgImage}
        image={homeHeroImage}
      ></DiDiPayHero>
      <DiDiPayWhyDiDi image={whyDiDiImage}></DiDiPayWhyDiDi>
      <DiDiPayFeatures image={featuresImage}></DiDiPayFeatures>
      <DiDiPaySilderSection images={sliderImages}></DiDiPaySilderSection>
      <DiDiPayGrid images={columnsImages.reverse()}></DiDiPayGrid>
      <DiDiPayColumns></DiDiPayColumns>
    </Layout>
  );
};

export default DiDiPay;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayHomeHero.image)|(mx.DiDiPayHomeHero.bgImage)|(mx.DiDiPayFeatures.image)|(mx.DiDiPayWhyDiDi.image)|(mx.DiDiPaySlider.image)|(mx.DiDiPayColumns.image)/"
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
