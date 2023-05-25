import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPayServiceHero from "../../../components/sections/DiDiPayServiceHero";
import DiDiPayServiceWhy from "../../../components/sections/DiDiPayServiceWhy";
import DiDiPayServiceGrid from "../../../components/sections/DiDiPayServiceGrid";
import DiDiPayBanner from "../../../components/sections/DiDiPayBanner";
import DiDiPayServiceColumns from "../../../components/sections/DiDiPayServiceColumns";

const DiDiPayService = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayServiceHeroMobile.bgImage";
  })[0];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayServiceHero.bgImage";
  })[0];
  const whyDiDiImage = images.filter((image) => {
    return image.title === "mx.DiDiPayServiceWhy.image";
  })[0];
  const columnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayServiceColumns.image") !== -1;
  });
  const bannerImage = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayBanner.image") !== -1;
  })[0];

  return (
    <Layout index={false}>
      <DiDiPayServiceHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></DiDiPayServiceHero>
      <DiDiPayServiceWhy image={whyDiDiImage}></DiDiPayServiceWhy>
      <DiDiPayServiceGrid images={columnsImages.reverse()}></DiDiPayServiceGrid>
      <DiDiPayBanner image={bannerImage}></DiDiPayBanner>
      <DiDiPayServiceColumns></DiDiPayServiceColumns>
    </Layout>
  );
};

export default DiDiPayService;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayServiceHero.bgImage)|(mx.DiDiPayServiceHeroMobile.bgImage)|(mx.DiDiPayServiceWhy.image)|(mx.DiDiPayServiceColumns.image)|(mx.DiDiPayBanner.image)/"
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