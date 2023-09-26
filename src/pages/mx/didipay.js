import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DiDiPayHero from "../../components/sections/DiDiPayHero";
import DiDiPayWhyDiDi from "../../components/sections/DiDiPayWhyDiDi";
import DiDiPayFeatures from "../../components/sections/DiDiPayFeatures";
import DiDiPayGrid from "../../components/sections/DiDiPayGrid";
import DiDiPayBusinessCTA from "../../components/sections/DiDiPayBusinessCTA";
import DiDiPayColumns from "../../components/sections/DiDiPayColumns";
import DiDiPayCarousel from "../../components/sections/DiDiPayCarousel";
import DiDiPayArticlesColumns from "../../components/sections/DiDiPayArticlesColumns";
import DiDiPayAutoCarousel from "../../components/sections/Pay/DiDiPayAutoCarousel";

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
  const columnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayColumns.image") !== -1;
  });
  const DiDiPayCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiPayCarousel.image";
  });
  const hColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiPayHomeColumns.image") !== -1;
  });
  const DiDiPayAutoCarouselImages = images.filter((image) => {
    return image.title === "mx.DiDiPayAutoCarousel.image";
  });
  const DiDiPayAutoCarouselMobileImages = images.filter((image) => {
    return image.title === "mx.DiDiPayAutoCarouselMobile.image";
  });

  return (
    <Layout>
      <DiDiPayHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></DiDiPayHero>
      <DiDiPayWhyDiDi image={whyDiDiImage}></DiDiPayWhyDiDi>
      <DiDiPayGrid images={columnsImages}></DiDiPayGrid>
      <DiDiPayFeatures image={featuresImage}></DiDiPayFeatures>
      <DiDiPayCarousel
        images={DiDiPayCarouselImages.reverse()}
      ></DiDiPayCarousel>
      <DiDiPayAutoCarousel 
        images={DiDiPayAutoCarouselImages.reverse()}
        imagesMobile={DiDiPayAutoCarouselMobileImages.reverse()}
      ></DiDiPayAutoCarousel>
      <DiDiPayArticlesColumns data={data}></DiDiPayArticlesColumns>
      <DiDiPayBusinessCTA image={businessCTAImage}></DiDiPayBusinessCTA>
      <DiDiPayColumns images={hColumnsImages}></DiDiPayColumns>
    </Layout>
  );
};

export default DiDiPay;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.DiDiPayHomeHeroMobile.bgImage)|(mx.DiDiPayHomeHero.bgImage)|(mx.DiDiPayFeatures.image)|(mx.DiDiPayWhyDiDi.image)|(mx.DiDiPayBusinessCTA.image)|(mx.DiDiPayBanner.image)|(mx.DiDiPayColumns.image)|(mx.DiDiPayCarousel.image)|(mx.DiDiPayHomeColumns.image)|(mx.DiDiPayAutoCarouselMobile.image)|(mx.DiDiPayAutoCarousel.image)/"
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
