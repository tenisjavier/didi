import React from "react";
import { graphql } from "gatsby";
import {
  faPercent,
  faClock,
  faThumbsUp,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DiDiCreditHero from "../../components/sections/DiDiCreditHero";
import DiDiCreditBenefits from "../../components/sections/DiDiCreditBenefits";
import DiDiCreditFeatures from "../../components/sections/DiDiCreditFeatures";

const DiDiCredit = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faPercent, faClock, faThumbsUp, faWallet];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "mx.PrestamosBenefits.image";
  })[0];
  const prestamosFeaturesImage = images.filter((image) => {
    return image.title === "mx.PrestamosFeatures.image";
  })[0];
  return (
    <Layout sb={false} index={false}>
      <DiDiCreditHero image={homeHeroBgImage}></DiDiCreditHero>
      <DiDiCreditBenefits
        image={drvBenefitsImage}
        icons={icons}
      ></DiDiCreditBenefits>
      <DiDiCreditFeatures
        image={prestamosFeaturesImage}
      ></DiDiCreditFeatures>
    </Layout>
  );
};

export default DiDiCredit;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.PrestamosHero.image)|(mx.PrestamosBenefits.image)|(mx.PrestamosFeatures.image)|(mx.PrestamosDrvGrid.image)|(mx.DiDiPrestamosReviews.bgImage)|(mx.PrestamosWhyDiDi.image)/"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        name: { eq: "DiDi Préstamos México" }
      }
    ) {
      nodes {
        name
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
