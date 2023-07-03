import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPayGiftcardHero from "../../../components/sections/DiDiPayGiftcardHero";
import DiDiPayGiftcardWhy from "../../../components/sections/DiDiPayGiftcardWhy";
import DiDiPayGiftcardFeatures from "../../../components/sections/DiDiPayGiftcardFeatures";
import DiDiPayCarousel from "../../../components/sections/DiDiPayCarousel";
import DiDiPayGiftcardCarousel from "../../../components/sections/DiDiPayGiftcardsCarousel";
import DiDiPayGiftcardColumns from "../../../components/sections/DiDiPayGiftcardColumns";

const Giftcards = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayGiftcardHeroMobile.bgImage";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayGiftcardHero.bgImage";
  })[0];
  const whyDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayGiftcardWhy.image";
  })[0];
  const featuresDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayGiftcardFeatures.image";
  })[0];
  const DiDiPayCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiPayCarousel.image";
  });
  const DiDiPayGiftcardCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiPayGiftcardCarousel.image";
  });

  return (
    <Layout>
      <DiDiPayGiftcardHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></DiDiPayGiftcardHero>
      <DiDiPayGiftcardWhy image={whyDiDiImage}></DiDiPayGiftcardWhy>
      <DiDiPayGiftcardFeatures
        image={featuresDiDiImage}
      ></DiDiPayGiftcardFeatures>
      <DiDiPayGiftcardCarousel images={DiDiPayGiftcardCarouselImages.reverse()}></DiDiPayGiftcardCarousel>
      <DiDiPayCarousel images={DiDiPayCarouselImages.reverse()}></DiDiPayCarousel>
      <DiDiPayGiftcardColumns></DiDiPayGiftcardColumns>
    </Layout>
  );
};

export default Giftcards;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayGiftcardHero.bgImage)|(mx.DiDiPayGiftcardHeroMobile.bgImage)|(mx.DiDiPayGiftcardWhy.image)|(mx.DiDiPayGiftcardFeatures.image)|(mx.DiDiPayBanner.image)|(mx.DiDiPayCarousel.image)|(mx.DiDiPayGiftcardCarousel.image)/"
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
