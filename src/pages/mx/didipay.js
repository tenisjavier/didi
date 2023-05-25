import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiPayHero from "../../components/sections/DiDiPayHero";
import DiDiPayWhyDiDi from "../../components/sections/DiDiPayWhyDiDi";
import DiDiPayFeatures from "../../components/sections/DiDiPayFeatures";
import DiDiPayGrid from "../../components/sections/DiDiPayGrid";
import DiDiPayBusinessCTA from "../../components/sections/DiDiPayBusinessCTA";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";
import DiDiPayBanner from "../../components/sections/DiDiPayBanner";
import DiDiPayArticlesColumns from "../../components/sections/DiDiPayArticlesColumns";

const DiDiPay = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHeroMobile.bgImage";
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
  const businessCTAImage = images.filter((image) => {
    return image.title === "mx.DiDiPayBusinessCTA.image";
  })[0];
  const bannerImage = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayBanner.image") !== -1;
  })[0];
  const columnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayColumns.image") !== -1;
  });

  return (
    <Layout>
      <DiDiPayHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></DiDiPayHero>
      <DiDiPayWhyDiDi image={whyDiDiImage}></DiDiPayWhyDiDi>
      <DiDiPayGrid images={columnsImages.reverse()}></DiDiPayGrid>
      <DiDiPayFeatures image={featuresImage}></DiDiPayFeatures>
      <DiDiPayBanner image={bannerImage}></DiDiPayBanner>
      <DiDiPayArticlesColumns data={data}></DiDiPayArticlesColumns>
      <DiDiPayBusinessCTA image={businessCTAImage}></DiDiPayBusinessCTA>
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
          regex: "/(mx.DiDiPayHomeHeroMobile.bgImage)|(mx.DiDiPayHomeHero.bgImage)|(mx.DiDiPayFeatures.image)|(mx.DiDiPayWhyDiDi.image)|(mx.DiDiPayBusinessCTA.image)|(mx.DiDiPayBanner.image)|(mx.DiDiPayColumns.image)/"
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
