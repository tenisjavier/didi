import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FinancialServicesHero from "../../components/sections/FinancialServicesHero";
import FinancialServicesColumns from "../../components/sections/FinancialServicesColumns";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.FinancialServices.bgImage";
  })[0];
  const homeHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.FinancialServicesMobile.bgImage";
  })[0];
  const DiDiPayWhyDiDi = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.image";
  })[0];
  const PrestamosHeroImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];

  const DiDiCrediCard = images.filter((image) => {
    return image.title === "mx.CreditCardWithoutBg.image";
  })[0];

  const columnsImages = [DiDiCrediCard, DiDiPayWhyDiDi, PrestamosHeroImage];

  return (
    <Layout>
      <FinancialServicesHero
        bgImage={homeHeroBgImage}
        mobileBgImage={homeHeroMobileBgImage}
      ></FinancialServicesHero>
      <FinancialServicesColumns
        images={columnsImages}
      ></FinancialServicesColumns>
    </Layout>
  );
};

export default SobreDiDi;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.FinancialServices.bgImage"
            "mx.FinancialServicesMobile.bgImage"
            "mx.DiDiPayHomeHero.image"
            "mx.PrestamosHero.image"
            "mx.CreditCardWithoutBg.image"
          ]
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
