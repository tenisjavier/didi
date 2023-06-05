import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPayPhoneHero from "../../../components/sections/DiDiPayPhoneHero";
import DiDiPayPhoneWhy from "../../../components/sections/DiDiPayPhoneWhy";
import DiDiPayPhoneFeatures from "../../../components/sections/DiDiPayPhoneFeatures";
import DiDiPayCarousel from "../../../components/sections/DiDiPayCarousel";
import DiDiPayPhoneColumns from "../../../components/sections/DiDiPayPhoneColumns";

const DiDiPayPhone = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayPhoneHeroMobile.bgImage";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayPhoneHero.bgImage";
  })[0];
  const whyDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayPhoneWhy.image";
  })[0];
  const featuresDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayPhoneFeatures.image";
  })[0];

  const DiDiPayCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiPayCarousel.image";
  });

  return (
    <Layout>
      <DiDiPayPhoneHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></DiDiPayPhoneHero>
      <DiDiPayPhoneWhy image={whyDiDiImage}></DiDiPayPhoneWhy>
      <DiDiPayPhoneFeatures image={featuresDiDiImage}></DiDiPayPhoneFeatures>
      <DiDiPayCarousel images={DiDiPayCarouselImages.reverse()}></DiDiPayCarousel>
      <DiDiPayPhoneColumns></DiDiPayPhoneColumns>
    </Layout>
  );
};

export default DiDiPayPhone;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayPhoneHero.bgImage)|(mx.DiDiPayPhoneHeroMobile.bgImage)|(mx.DiDiPayPhoneWhy.image)|(mx.DiDiPayPhoneFeatures.image)|(mx.DiDiPayBanner.image)|(mx.DiDiPayCarousel.image)/"
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
    allContentfulArticle(
      filter: { category: { eq: "pay" }, country: { code: { eq: "mx" } } }
      sort: { updatedAt: DESC }
      limit: 3
    ) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;
